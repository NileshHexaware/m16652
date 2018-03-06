var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var configAuth = require('./config/auth');
var portC = process.env.PORT || 3000;

app.set('view engine', 'ejs');
var redirecturi = "";

passport.use(new GoogleStrategy({

    // pull in our app id and secret from our auth.js file
    clientID        : configAuth.googleAuth.clientID,
    clientSecret    : configAuth.googleAuth.clientSecret,
    callbackURL     : configAuth.googleAuth.callbackURL

},
    function (accessToken, refreshToken, extraParams, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  ));


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
  res.render('indexgoogle.ejs');
});


app.get('/auth/google', passport.authenticate('google', {
    scope: ['public_profile', 'email']
  }));
  
  
  
  app.get('/callback', passport.authenticate('google', {
  }),
    function (req, res) {
      console.log(redirecturi);
      res.redirect(redirecturi + "&authorization_code=34s4f545");
  
    });

    app.listen(portC,function(){
        console.log('AGENT is running my app on  PORT: ' + portC);
    })