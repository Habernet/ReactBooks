const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// write books routes here
// Matches with "/api/books"
router
  .route("/")
  //When this route is hit with a get req, the booksControllerfindAll method will handle the req/res
  .get(booksController.findAll)
  //When this route is hit with a post req, the booksControllercreate method will handle the req/res
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")

  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
