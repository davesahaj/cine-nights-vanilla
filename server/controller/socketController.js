const { createUser, getUser, removeUser } = require("../utils/users");
const formatMessage = require("../utils/message");
// incoming messages from clients
const disconnect = (socket) => {
  const user = getUser(socket.id);
  if (user) {
    sendMessageToRoom(user, `${user.name} left`, true);
    removeUser(socket.id);
  }
};
const messageFromClient = (socket, message, callback) => {
  const user = getUser(socket.id); // check if user is added in the room or not
  if (!user) {
    callback({ delivered: false }); // if user is not in the group, message cant be send
  } else {
    sendMessageToRoom(user, message); // broadcast the message to room
    callback({ delivered: true });
  }
};
// outgoing messages to clients
const sendMessageToClient = (socketid, { message }) => {
  io.to(socketid).emit("message", { txt: message });
};
const sendMessageToRoom = (user, message, isInfo) => {
  io.to(user.room).emit(
    `messageFromServer`,
    formatMessage(user, message, isInfo)
  ); //format message and emit to room
};
const addUserToRoom = (socket, username, room) => {
  //TODO: find whether room exists in database or not.

  const user = createUser(socket.id, username, room);
  socket.join(user.room);
  // io.to(user.room).emit(`message`, { message: "message from addUserToRoom" });
  sendMessageToRoom(user, `${user.name} joined`, true);
};

module.exports = {
  disconnect,
  messageFromClient,
  addUserToRoom,
};
