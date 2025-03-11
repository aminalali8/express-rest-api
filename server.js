const express = require("express");
const cors = require("cors");
const process = require("process");

const app = express();

var corsOptions = {
  origin: process.env.FRONTEND_URL
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const runSeeders = require("./app/seeders");

const retryMaxCount = 10;
const retryInterval = 5;

// simple to understand retry function for connecting to the database
function dbSyncWithRetry(maxRetries, sleepTime, db) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleError(err) {
    if (maxRetries <= 0) {
      throw err;
    }
    console.log(`Could not connect to database, waiting for ${sleepTime} seconds. ${maxRetries - 1} retries left`);
    await sleep(sleepTime * 1000);

    return dbSyncWithRetry(maxRetries - 1, sleepTime, db);
  }

  return db.sequelize.sync({ force: true })
    .then(() => {
      console.log("Database synced successfully");
      return runSeeders();
    })
    .catch(handleError);
}

// Initialize database and run seeders
dbSyncWithRetry(retryMaxCount, retryInterval, db);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My App" });
});

require("./app/routes/article.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
