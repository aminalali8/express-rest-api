module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    },
    publishedAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tags: {
      type: Sequelize.JSON,
      allowNull: false,
      defaultValue: []
    },
    status: {
      type: Sequelize.ENUM('draft', 'published'),
      allowNull: false,
      defaultValue: 'draft'
    }
  });

  return Article;
}; 