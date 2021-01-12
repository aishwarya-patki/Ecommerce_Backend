const mongoose = require("mongoose");
const { deleteOne } = require("../models/userModel");
const assert = require("assert");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://admin:admin2020@cluster0.rvc82.mongodb.net/AllProducts?retryWrites=true&w=majority"
);
const connect = mongoose.connection
  .once("open", () => {
    console.log("Connected!");
  })
  .on("error", (error) => {
    console.warn("Error : ", error);
  });
