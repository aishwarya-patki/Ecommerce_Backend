const product = require("../models/productModel");

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
  product.find({sub_category:"Guitar"}).then(data=>{
    res.json({
        d:data
    })
  })

  // product
  //   .find()
  //   .then((data) => {
  //     res.json({
  //       post: data,
  //     });
  //   })
  //   .catch((error) => {
  //     res.status(501).json({ message: "Product not found" });
  //   });
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
