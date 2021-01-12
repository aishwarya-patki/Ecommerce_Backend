const express = require('express');
const router = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const reviewController = require('../controller/review_controller');
const checkAuth = require('../middleware/checkAuth')
router.use(bodyparser.json());

const review = require('../models/reviewModel');
const passport = require('passport');

router.get('/',reviewController.fetchReviews);

router.post('/', checkAuth.authorization, reviewController.createReview);

module.exports = router;
