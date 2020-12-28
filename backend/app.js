const express = require('express');
const app = express();
const bodyparser=require('body-parser');
const productRoute=require('../backend/routes/product')
const port = 3000;
const mongoose=require('mongoose');

app.use(bodyparser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})


mongoose.connect('mongodb+srv://admin:admin2020@cluster0.rvc82.mongodb.net/AllProducts?retryWrites=true&w=majority');

mongoose.connection.on('connected',()=>{
  console.log('connected');
});

// mongoose.connect('mongodb+srv://admin:admin@2020!@cluster0.rvc82.mongodb.net/AllProducts?retryWrites=true&w=majority', {​​​​​ keepAlive: true, keepAliveInitialDelay: 300000 }​​​​​);

app.use(express.static(__dirname));

app.use('/product',productRoute);
app.use('/',(req,res)=>{
  res.send('<h1>WELCOME TO SERVER</h1>');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
