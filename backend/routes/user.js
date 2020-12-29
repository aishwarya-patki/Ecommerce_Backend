const express = require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const userModel = require('./../models/userModel');
//const router = require('./product');
//const express = require('express');
const userController = require('./../controller/user_controller');
const router = express();
router.use(bodyparser.json());

router.post('/signup',userController.createUser);

router.post('/signin',userController.loginUser);

module.exports = router;
