const {
  getUser,
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  borrowBookUser,
  returnBookUser,
} = require("../controllers/users");

const router = require("express").Router();

router.get("/user/:id", getUser);
router.get("/user", getAllUsers);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);
router.post("/user/:id/book/:book_id", borrowBookUser);
router.delete("/user/:id/book/:book_id", returnBookUser);

module.exports = router;
