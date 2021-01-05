const express = require('express');
const router = express();
const bodyparser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const productController = require('../controller/product_controller');
const multer_upload = require('../middleware/upload');
const checkAuth =  require('./../middleware/checkAuth')

router.use(bodyparser.json());

const product = require('../models/productModel');

router.get('/', productController.fetchProducts);
//router.get('/recommended')
//router.get()

router.post('/', checkAuth.authorization, multer_upload, productController.createProduct );

router.get('/:id', productController.fetchProductById);
router.delete('/:id',checkAuth.authorization, productController.deleteProductById);

//router.get("*", (_, res) => res.status(404).send("404 not found"))
module.exports = router;
