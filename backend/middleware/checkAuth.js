const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');

//require('dotenv').config();
//const env =  require('./../../src/environments/environment');

let email;
let username;
exports.authorization = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null)
    return res.status(401).json("Token not found");

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    console.log(process.env.JWT_KEY);
    console.log("user" + user.email);
    email=user.email;
    username = user.username;
    if (err) return res.status(403).json({
      "message": "Token expire"
    });
    next();
  })
}

exports.sendEmail=()=>{
  return email;
}
exports.getUsername=()=>{
  return username;
}
