const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  surname: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 2,
  },
  books: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "book",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
