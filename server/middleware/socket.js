// UUID for socket clients ID
const uuid = require("uuid");
const socketRoute = require("../routes/socketRoute");

io.use((socket, next) => {
  socket.id = uuid.v4(); // set custom UUID on connection
  next();
});

io.on(`connection`, (socket) => {
  socketRoute(socket);
});
