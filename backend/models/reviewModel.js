const mongoose =  require('mongoose')

const Review = new mongoose.Schema({
  blogid:mongoose.Schema.Types.ObjectId,
  username:{
    type:String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  rating:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model("reviews",Review);
