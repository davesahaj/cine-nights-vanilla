const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [15, "Name cannot exceed 15 letters"],
    minLength: [3, "Name cannot be less than 3 letters"],
  },
  room: {
    type: mongoose.Schema.ObjectId,
    ref: "Room",
    required: [true, "Please enter room ID"],
  },
  socketid: {
    type: String,
    required: [true, "Please provide the socket ID"],
  },
});

module.exports = mongoose.model("User", userSchema);
