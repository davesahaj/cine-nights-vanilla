const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const router = require("./router");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);

io.on("Connection", (socket) => {
  console.log("We have a connection");
  socket.on("disconnect", () => {
    console.log("user has left");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`server has been started on ${PORT}`));
