// Bring in mongoose so we can create a schema with  its methods
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: String,
  synopsis: String,
  image: String,
  link: String,
  id: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
