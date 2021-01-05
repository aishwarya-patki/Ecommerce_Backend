const product = require("../models/productModel");
//const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const mongoose = require('mongoose');


exports.createProduct = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const productObj = await new product({
    main_category: req.body.main_category,
    sub_category: req.body.sub_category,
    product_name: req.body.product_name,
    product_descriptions: req.body.product_descriptions,
    image_paths: req.file.path,
    price: req.body.price,
    product_beginner: req.body.product_beginner,
    product_recommended: req.body.product_recommended,
  });

  productObj
    .save()
    .then((data) => {
      console.log("Product added Successfully");
      res.status(200).json({
        message: "Product added Successfully",
      });
    })
    .catch((error) => {
      res.status(501).json({ message: "Product not inserted" });
    });
};
exports.fetchProducts = (req, res) => {
  let instrument = req.query.instrument;
  let beginner = req.query.beginner;
  let recommended = req.query.recommended;

  console.log(instrument,beginner,recommended);
  if(instrument && beginner && recommended){
    product
    .find({sub_category:instrument})
    .where({product_beginner:beginner})
    .where({product_recommended:recommended})
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Product not found" });
    });
  }
  else if(instrument && beginner){
    product
    .find({sub_category:instrument})
    .where({product_beginner:beginner})
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Product not found" });
    });
  }
  else if(instrument && recommended){
    product
    .find({sub_category:instrument})
    .where({product_recommended:recommended})
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Product not found" });
    });
  }
  else if(instrument){
    product
    .find({sub_category:instrument})
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Product not found" });
    });
  }
  else if(recommended){
    product
    .find({product_recommended:recommended})
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Product not found" });
    });
  }
  else if(beginner){
    product
    .find({product_beginner:true})
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Product not found" });
    });
  }
  else{
    product
    .find()
    .then((data) => {
      return res.json({
        post: data,
      });
    })
    .catch((error) => {
      return res.status(501).json({ message: "Product not found" });
    });
  }

};
exports.fetchProductById = (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  product
    .findById(id)
    .then((data) => {
      res.status(200).json({
        product: data,
      });
    })
    .catch((error) => {
      res.status(501).json({ message: "Product not found" });
    });
};
exports.deleteProductById = (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  product
    .findByIdAndDelete(id)
    .then((data) => {
      res.status(200).json({
        message: "Deleted Successfull",
        product: data,
      });
    })
    .catch((error) => {
      res.status(501).json({ message: "Product not deleted" });
    });
    exports.updateProduct
};
