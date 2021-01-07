const express = require('express');
const router = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const blogController = require('../controller/blog_controller');
const checkAuth = require('../middleware/checkAuth')
router.use(bodyparser.json());

const blog = require('../models/blogModel');

router.get('/',blogController.fetchBlogs);

router.post('/', checkAuth.authorization, blogController.createBlog);

module.exports = router;
