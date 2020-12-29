const mongoose = require("mongoose");

const UserDetail = new mongoose.Schema({
  userid:mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userdetail", UserDetail);
