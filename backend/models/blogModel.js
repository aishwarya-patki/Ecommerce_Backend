const mongoose =  require('mongoose')

const Blog = new mongoose.Schema({
  blogid:mongoose.Schema.Types.ObjectId,
  username:{
    type:String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    required :true
  }
})

module.exports = mongoose.model("blogs",Blog);
