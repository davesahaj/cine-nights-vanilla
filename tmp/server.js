const path = require("path");
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  getRoomUsers,
  userLeave,
} = require("./utils/users");
const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
//for socket.io:
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);
const userName = "Cine Nights";

//static folder
app.use(express.static(path.join(__dirname, "public")));

//when client connects
io.on(`connection`, (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);
    //welcome user
    socket.emit(`message`, formatMessage(userName, `welcome ${user.username}`));

    //broadcast a message
    socket.broadcast
      .to(user.room)
      .emit(
        `message`,
        formatMessage(userName, `${username} has joined the chat`)
      );

    //send users and room info
    io.to(user.room).emit(`roomUsers`, {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  //listen for chat message
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
    console.log(socket.id);
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  //when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(userName, `${user.username} has left the chat`)
      );

      //send users and room info
      io.to(user.room).emit(`roomUsers`, {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`server has been started on: https://localhost:${PORT}`);
});
