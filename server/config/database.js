const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/cinenights").then((data) => {
    console.log("Database connected with server");
  });
};
module.exports = connectDatabase;
