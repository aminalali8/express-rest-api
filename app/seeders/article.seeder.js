const db = require("../models");
const Article = db.articles;

const articles = [
  {
    title: "Getting Started with React",
    content: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.",
    author: "John Doe",
    publishedAt: new Date(),
    category: "Web Development",
    tags: ["react", "javascript", "frontend"],
    status: "published"
  },
  {
    title: "Understanding TypeScript",
    content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser, any host, any OS.",
    author: "Jane Smith",
    publishedAt: new Date(),
    category: "Programming",
    tags: ["typescript", "javascript", "development"],
    status: "published"
  },
  {
    title: "The Future of AI",
    content: "Artificial Intelligence is transforming the way we live and work. From machine learning to deep learning, AI is becoming increasingly sophisticated.",
    author: "Alice Johnson",
    publishedAt: new Date(),
    category: "Technology",
    tags: ["ai", "machine-learning", "future"],
    status: "draft"
  },
  {
    title: "Web Security Best Practices",
    content: "Learn about the essential security practices every web developer should follow to protect their applications and users.",
    author: "Bob Wilson",
    publishedAt: new Date(),
    category: "Security",
    tags: ["security", "web-development", "best-practices"],
    status: "published"
  }
];

const seedArticles = async () => {
  try {
    await Article.bulkCreate(articles);
    console.log('Articles seeded successfully');
  } catch (error) {
    console.error('Error seeding articles:', error);
  }
};

module.exports = seedArticles; 