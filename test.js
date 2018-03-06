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

// you can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/login', function (req, res) {

  redirecturi=req.query.redirect_uri;
  res.sendfile('Public/index1.html');
});

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));


app.get('/callback', passport.authenticate('facebook', {
}), 
	function (req, res) {
  console.log(redirecturi);
  res.redirect(redirecturi + "&authorization_code=34s4f545");
	
    });