const errorMiddleware = require("./middleware/error");
const express = require("express");
const cors = require("cors");

app = express();
app.use(express.json());
app.use(cors());
//Routes
const roomRoute = require("./routes/roomRoute");
app.use("/", roomRoute);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;
