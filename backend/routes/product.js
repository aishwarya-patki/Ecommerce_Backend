const express = require('express');
const router = express();
const bodyparser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const productController = require('../controller/product_controller');
const multer_upload = require('../middleware/upload');

router.use(bodyparser.json());

const product = require('../models/productModel');

router.get('/', (req, res) => {
  res.json({
    message: "HELLO WORLD"
  })
})

router.post('/', multer_upload, productController.createProduct );

module.exports = router;
