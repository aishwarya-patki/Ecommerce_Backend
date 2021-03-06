const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./../models/userModel");
const encryption = require("./../middleware/encrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./../middleware/passport-setup');


// For an actual app you should configure this with an experation time, better keys, proxy and secure


exports.createUser = async (req, res) => {
  const user = await new userModel({
    username: req.body.username,
    email: req.body.email,
    password: encryption.encryptPWD(req.body.password),
  });

  user
    .save()
    .then((data) => {
      res.status(200).json({ message: "User Created Successfully!" });
    })
    .catch((err) => {
      res.status(401).json({ message: "Email already exist" });
    });
};

exports.loginUser = async (req, res) => {
  console.log("create",process.env.JWT_KEY)
  const userInput = await new userModel({
    email: req.body.email,
    password: req.body.password,
  });

  const userData = await userModel.findOne({ email: userInput.email });
  if (!userData) {
    return res.status(400).json({ msg: "Account not found" });
  }

  const isMatch = await bcrypt.compare(userInput.password, userData.password);
  console.log(userInput.password, userData.password, isMatch);

  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  const token = await jwt.sign(
    {
      userid: userData._id,
      username: userData.username,
      email: userData.email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "1h",
    }
  );

  res.status(200).json({
    msg: "User Login Successful",
    token: token
  });
};
