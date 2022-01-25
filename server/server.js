const app = require("./app"); // express app
const dotenv = require("dotenv");
const PORT = 4000; // port number

const connectDatabase = require("./config/database"); //DB connection
dotenv.config({ path: "./config/config.env" });
connectDatabase(); // Initiate DB connection

const server = require("http").Server(app); // node server

//socket IO
global.io = require("socket.io")(server, {
  path: "/liveData", //path for socketIO
  cors: { methods: ["GET", "POST"] },
});
require("./middleware/socket"); // Socket IO middleware

//Start Server
server.listen(PORT, () => {
  console.log("Server has been started on http://localhost:4000/");
});
