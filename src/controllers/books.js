const Book = require("../models/book");

const getBook = (request, response) => {
  const { id } = request.params;
  return Book.findById(id)
    .then((book) => {
      response.status(200).json(book);
    })
    .catch((e) => response.status(500).send(e.message));
};
  
  const getAllBooks = (request, response) => {
    return Book.find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((e) => response.status(500).send(e.message));
};
  
  const createBook = (request, response) => {
    return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).json(book);
    })
    .catch((e) => response.status(500).send(e.message));
};
  
  const deleteBook = (request, response) => {
    const { id } = request.params;
    return Book.findByIdAndDelete(id)
      .then((book) => {
        response.status(204).send("Success");
      })
      .catch((e) => response.status(500).send(e.message));
  };
  
  const updateBook = (request, response) => {
    const { id } = request.params;
  return Book.findByIdAndUpdate(id, { ...request.body })
    .then((book) => {
      response.status(200).json(book);
    })
    .catch((e) => response.status(500).send(e.message));
};
  
  module.exports = {
    getBook,
    getAllBooks,
    createBook,
    deleteBook,
    updateBook,
  };
