const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('./../models/userModel')

passport.serializeUser(function(user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
  });

passport.deserializeUser(function(user, done) {
    /*
    Instead of user this function usually recives the id
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID:"658613871689-9mcn539e9f2mvklp84u8l1ba868vblnp.apps.googleusercontent.com",
    clientSecret:"3QhDNTWtQyfjLcwLtRbo3bfo",
    callbackURL:"http://localhost:4200/user/google/callback/",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User
    .findOne({email:profile.email})
    .then((currentUser)=>{
      if(currentUser){
        console.log('User Exists'+currentUser);
      } else{
        new User({
          username:profile.displayName,
          email: profile.email,
          password: profile.id
        }).save().then((newUser)=>{
          console.log('New user created'+newUser);
        })
      }
    })
    console.log(profile)
    return done(null, profile);
  }
));
