const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [7, "Please enter a valid room ID"],
    minLength: [7, "Please enter a valid room ID"],
  },
  messages: [
    {
      user: { type: String, required: true },
      text: { type: String, required: true },
    },
  ],
  noOfUsers: {
    type: Number,
    default: 1,
  },
  admin: {
    type: String,
    required: [true, "Please provide the room admin"],
  },
});

module.exports = mongoose.model("Room", roomSchema);
