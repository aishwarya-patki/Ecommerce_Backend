const express = require('express');
const router = express();
const bodyparser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const productController = require('../controller/product_controller');
const multer_upload = require('../middleware/upload');

router.use(bodyparser.json());

const product = require('../models/productModel');

router.get('/', productController.fetchProducts);

router.post('/', multer_upload, productController.createProduct );

router.get('/:id',productController.fetchProductById);
router.delete('/:id',productController.deleteProductById);
module.exports = router;
