const jwt = require('jsonwebtoken');
//require('dotenv').config();
//const env =  require('./../../src/environments/environment');
exports.authorization = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(token == null)
  return res.status(401).json("Token not found");

  jwt.verify(token,process.env.JWT_KEY, (err)=>{
    console.log(process.env.JWT_KEY);
    if(err) return res.status(403).json({"message":"Token expire"});
    next();
  })
}
