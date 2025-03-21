module.exports = app => {
  const articles = require("../controllers/article.controller.js");

  var router = require("express").Router();

  // Create a new Article
  router.post("/", articles.create);

  // Retrieve all Articles
  router.get("/", articles.findAll);

  // Retrieve a single Article with id
  router.get("/:id", articles.findOne);

  // Update an Article with id
  router.put("/:id", articles.update);

  // Delete an Article with id
  router.delete("/:id", articles.delete);

  // Delete all Articles
  router.delete("/", articles.deleteAll);

  app.use('/api/articles', router);
}; 