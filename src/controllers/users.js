const Book = require("../models/book");
const user = require("../models/user");
const User = require("../models/user");

const getUser = (request, response) => {
  const { id } = request.params;
  return User.findById(id)
    .then((user) => {
      response.status(200).json(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const getAllUsers = (request, response) => {
  return User.find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((e) => response.status(500).send(e.message));
};

const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).json(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const deleteUser = (request, response) => {
  const { id } = request.params;
  return User.findByIdAndDelete(id)
    .then((user) => {
      response.status(204).send("Success");
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateUser = (request, response) => {
  const { id } = request.params;
  return User.findByIdAndUpdate(id, { ...request.body })
    .then((user) => {
      response.status(200).json(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const borrowBookUser = (request, response) => {
  const { id, book_id } = request.params;
  return Book.findById(book_id).then((book) => {
    return User.findById(id)
      .then((user) => {
        user.books.push(book);
        return user.save();
      })
      .then((saved_user) => {
        response.status(201);
        response.json(saved_user);
      })
      .catch((e) => response.status(500).send(e.message));
  });
};

const returnBookUser = (request, response) => {
  const { id, book_id } = request.params;
  return Book.findById(book_id).then((book) => {
    return User.findById(id)
    .then((user) => {
      user.books.splice(book);
      return user.save();
    })
    .then((saved_user) => {
      response.status(204);
      response.json(saved_user);
    })
    .catch((e) => response.status(500).send(e.message));
  })
};

module.exports = {
  getUser,
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  borrowBookUser,
  returnBookUser,
};

const users = [];
