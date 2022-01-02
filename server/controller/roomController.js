const Room = require("../models/roomModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const crypto = require("crypto");
const { createUser } = require("../utils/users");

//create a room
function randomValueHex(len) {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, len)
    .toUpperCase(); // return required number of characters
}
exports.createRoom = catchAsyncErrors(async (req, res, next) => {
  // const socket = req.app.get("socketio");
  // socket.emit("message", { txt: "createRoom socket working!" });

  const { username, userid } = req.body;
  if (!username || !userid) {
    return next(new ErrorHandler("error", 501));
  }

  const roomName = randomValueHex(3) + "-" + randomValueHex(3);
  const room = await Room.create({ name: roomName, admin: userid });
  const user = createUser(userid, username, room.name);
  const options = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res
    .status(200)
    .cookie("userid", user.id, options)
    .json({ success: true, room: `${room.name}` });
});

// join a room
exports.joinRoom = catchAsyncErrors(async (req, res, next) => {
  const io = req.app.get("socketio");
  const room = await Room.findOne({ name: req.params.roomid });
  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }

  //append user to room

  res.status(200).json({ success: true, room });
});
