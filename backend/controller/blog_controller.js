const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./../models/blogModel");
const encryption = require("./../middleware/encrypt");
const JWT_token = require("./../middleware/checkAuth");

exports.createBlog = async (req, res) => {
  console.log(req.body);
  const blogObj = await new Blog({
    username: JWT_token.getUsername(),
    email: JWT_token.sendEmail(),
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  });

  blogObj
    .save()
    .then((data) => {
      res.status(200).json({ message: "Blog added successfully" });
    })
    .catch((err) => {
      res.status(501).json({ message: "Blog not added" });
      console.log(err);
    });
};

exports.fetchBlogs = (req, res) => {
  Blog
    .find()
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Blog not found" });
    });
};
