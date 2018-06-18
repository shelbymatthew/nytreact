const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    article: "ARTICLE",
    date: "DATE",
    url:
      "URL",
  },

];



db.article
  .remove({})
  .then(() => db.article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
