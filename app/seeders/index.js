const seedArticles = require('./article.seeder');

const runSeeders = async () => {
  try {
    await seedArticles();
    console.log('All seeders completed successfully');
  } catch (error) {
    console.error('Error running seeders:', error);
  }
};

module.exports = runSeeders; 