const bcrypt = require('bcrypt');

exports.encryptPWD =(password)=>{
return bcrypt.hashSync(password, bcrypt.genSaltSync(10),null);
};
