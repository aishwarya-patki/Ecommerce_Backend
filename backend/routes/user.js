const express = require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const userModel = require('./../models/userModel');
//const router = require('./product');
//const express = require('express');
const userController = require('./../controller/user_controller');
const router = express();
router.use(bodyparser.json());

const passport = require('passport');
const cookieSession = require('cookie-session')
require('./../middleware/passport-setup');

router.post('/signup',userController.createUser);

router.post('/signin',userController.loginUser);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/user/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/user/good');
  }
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
      next();
  } else {
      res.sendStatus(401);
  }
}
router.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
router.get('/good', isLoggedIn, (req, res) =>{
    console.log("name:"+req.user.displayName,"email:"+req.user.emails[0].value);
    res.send("<h1>Authorized</h1>");
})
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})
module.exports = router;
