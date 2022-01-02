const {
  disconnect,
  messageFromClient,
  addUserToRoom,
} = require("../controller/socketController");
const socketRoute = (socket) => {
  socket.on("createRoom", () => createRoom(socket, room));
  socket.on(`disconnect`, () => disconnect(socket));
  socket.on(`joinRoom`, ({ username, room }) =>
    addUserToRoom(socket, username, room)
  );
  socket.on(`messageFromClient`, (message, callback) =>
    messageFromClient(socket, message, callback)
  );
};

module.exports = socketRoute;
