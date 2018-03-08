setTimeout(function(){
console.log("Nilesh");
},2000);
	

console.log("hello");






const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const facebookStrategy = require('passport-facebook');
var configAuth = require('./auth.js');


var strategy = new facebookStrategy(
  {
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    console.log(profile);
    return done(null, profile);
  }
);


app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
passport.use(strategy);

var express=require('express');
var app=express();


app.get('',addword);

