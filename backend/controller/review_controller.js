const express = require("express");
const mongoose = require("mongoose");
const Review = require("./../models/reviewModel");
const encryption = require("./../middleware/encrypt");
const JWT_token = require("./../middleware/checkAuth");

exports.createReview = async (req, res) => {
  console.log(req.body);
  const ReviewObj = await new Review({
    username: JWT_token.getUsername(),
    email: JWT_token.sendEmail(),
    rating: req.body.rating,
    description: req.body.description
  });

  ReviewObj
    .save()
    .then((data) => {
      res.status(200).json({ message: "Review added successfully" });
    })
    .catch((err) => {
      res.status(501).json({ message: "Review not added" });
      console.log(err);
    });
};

exports.fetchReviews = (req, res) => {
  Review
    .find()
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Reviews not found" });
    });
};
