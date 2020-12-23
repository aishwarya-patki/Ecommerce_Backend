const mongoose = require('mongoose');

const AllProducts = new mongoose.Schema({
        main_category:{
          type:String,
          required:true
        },
        sub_category:{
          type:String,
          required:true
        },
        product_name:{
          type:String,
          required:true
        },
        product_descriptions:{
          type:String,
          required:true
        },
        image_paths:{
          type:String
        },
        price:{
          type:Number,
          required:true
        },
        product_beginner:{
          type:Boolean,
          required:true
        },
        product_recommended:{
          type:Boolean,
          required:true
        }

})

module.exports=mongoose.model('product',AllProducts);
