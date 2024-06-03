const {
    getBook,
    getAllBooks,
    createBook,
    deleteBook,
    updateBook,
  } = require("../controllers/books");
  
  const router = require("express").Router();
  
  router.get("/book/:book_id", getBook);
  router.get("/book", getAllBooks);
  router.post("/book", createBook);
  router.delete("/book/:book_id", deleteBook);
  router.put("/book/:book_id", updateBook);
  
  module.exports = router;
  