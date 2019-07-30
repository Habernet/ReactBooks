// Bring in mongoose so we can create a schema with  its methods
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: String,
  link: String,
  date: { type: Date, defualt: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
