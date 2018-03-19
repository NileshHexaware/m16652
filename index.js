var request = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var isAlphanumeric = require('is-alphanumeric');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var incident = require('./DAL');
//import incident from '/DAL';
var fbmodularity = require('./facebook_modularity')
var slackmodularity = require('./slack_modularity')
var googlemodularity = require('./google_modularity')
app.set('view engine', 'ejs');
var configAuth = require('./config/auth');
var passport = require('passport');
const facebookStrategy = require('passport-facebook');
var GoogleStrategy = require( 'passport-google-oauth' ).OAuth2Strategy;
var TwitterStrategy  = require('passport-twitter').Strategy;
var expresssession=require('express-session');
var fs = require('fs');
var redirecturi = "";
var bot="";

var sql=require('mssql');

var dbconfig={
server:'HEX-MUM1-LAP052\SA',
database :'SampleDB',
user :'sa',
password :'pass@123',
port :1433
};

function insertlog(user,bot,sessionID)
{
  var conn=new sql.ConnectionPool(dbconfig);
  var request=new sql.Request(conn);
  conn.connect(function(err){
   
    if(err){
      console.log(err);
      return;
    }
    var queryinsert="INSERT INTO chatlogs (Usersays, Botsays,SessionId) VALUES ('"+user+"', '"+bot+"' ,'"+sessionID+"')";
    request.query(queryinsert,function(err,result){
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  conn.close();
}

app.post('/', function (req, res) {

  if (req.body.originalRequest.source == 'facebook') {


    if (req.body.result.action == "ActionHello")
    {
      bot=req.body.result.fulfillment.messages[10].title +req.body.result.fulfillment.messages[11].title;
      incident.Chatlogs(req.body.result.resolvedQuery,bot,req.body.sessionId);
      insertlog(req.body.result.resolvedQuery,bot,req.body.sessionId);
    }
    if (req.body.result.action == "ActionCategory")
    {
      bot=req.body.result.fulfillment.messages[3].title +'<br>'+'select below category -'+req.body.result.fulfillment.messages[3].buttons[0].text+' '+req.body.result.fulfillment.messages[3].buttons[1].text+' '+req.body.result.fulfillment.messages[3].buttons[2].text;
      incident.Chatlogs(req.body.result.resolvedQuery,bot,req.body.sessionId);
    }

    if (req.body.result.parameters.Category === 'Network') {
      incident.Chatlogs(req.body.result.resolvedQuery ,'select below category -'+ 'DHCP'+ ' ' + 'DNS' +' ' +'IP Address' ,req.body.sessionId);
      return res.json(fbmodularity.subcategoryNetwork(req, res));
    }

    if (req.body.result.parameters.Category === 'Hardware') {
      incident.Chatlogs(req.body.result.resolvedQuery ,'select below category -'+ 'Monitor'+ ' ' + 'Keyboard' +' ' +'Mouse' ,req.body.sessionId);
      return res.json(fbmodularity.subcategoryHardware(req, res));
    }

    if (req.body.result.parameters.Category === 'Software') {
      incident.Chatlogs(req.body.result.resolvedQuery ,'select below category -'+ 'Email'+ ' ' + 'OS' +' ' +'Mac' ,req.body.sessionId);
      return res.json(fbmodularity.subcategorySoftware(req, res));
    }

    //Rest Api Call started

    if (req.body.result.action == "CreateIncident.CreateIncident-custom") {
       
      incident.Chatlogs(req.body.result.parameters.subcategory,'Please Enter Description',req.body.sessionId);
      incident.Chatlogs(req.body.result.parameters.desc,'Please Enter Severity as High, Low or Medium',req.body.sessionId); 
      
      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, req.body.result.parameters.Category, req.body.result.parameters.subcategory, function (err, resu) {
        
        var success = 'Incident Logged Succesfully';//resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success + ".\nNote it down for further enquiry.";

        incident.Chatlogs(req.body.result.parameters.severity,resagent,req.body.sessionId);
        return res.json({
          followupEvent: {
            "name": "mainmenuevent",
            "data": {
              "incnumber": success
            }
          }
        });
       });
    }

    if (req.body.result.action == "getincident") {
      var incidentcheck = req.body.result.parameters.incidentno;
      if (isAlphanumeric(incidentcheck)) {
        incident.statusIncident(req.body.result.parameters.incidentno, function (err, resul) {
          var jsonparse = JSON.parse(resul);
          console.log(jsonparse);
          if (jsonparse.hasOwnProperty('result')) {
            return res.json({
              followupEvent: {
                "name": "mainmenueventgetinc",
                "data": {
                  "incstatus": jsonparse.result[0].short_description,
                  "incnumber": jsonparse.result[0].number,
                  "resolved_at": jsonparse.result[0].resolved_at
                }
              }
            });
          }
          else {
            return res.json({
              followupEvent: {
                "name": "IncFailevent",
                "data": {

                }
              }

            });

          }
        });
      }
      else {
        return res.json({
          followupEvent: {
            "name": "IncFailevent",
            "data": {

            }
          }

        });
      }

    }
  }
  else if (req.body.originalRequest.source == 'slack') {

    if (req.body.result.parameters.Category === 'Network') {
      return res.json(slackmodularity.subcategoryNetwork(req, res));
    }

    if (req.body.result.parameters.Category === 'Hardware') {
      return res.json(slackmodularity.subcategoryHardware(req, res));
    }

    if (req.body.result.parameters.Category === 'Software') {
      return res.json(slackmodularity.subcategorySoftware(req, res));
    }

    //Rest Api Call started

    if (req.body.result.action == "CreateIncident.CreateIncident-custom") {

      var cat = req.body.result.contexts[0].parameters.Category;
      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {
        var success = resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success + ".\nNote it down for further enquiry.";
        return res.json({
          followupEvent: {
            "name": "mainmenuevent",
            "data": {
              "incnumber": success
            }
          }
        });
      });
    }

    if (req.body.result.action == "getincident") {
      var incidentcheck = req.body.result.parameters.incidentno;
      if (isAlphanumeric(incidentcheck)) {
        incident.statusIncident(req.body.result.parameters.incidentno, function (err, resul) {
          var jsonparse = JSON.parse(resul);
          if (jsonparse.hasOwnProperty('result')) {
            console.log(jsonparse.result[0].description);
            return res.json({
              followupEvent: {
                "name": "mainmenueventgetinc",
                "data": {
                  "incstatus": jsonparse.result[0].short_description,
                  "incnumber": jsonparse.result[0].number,
                  "resolved_at": jsonparse.result[0].resolved_at
                }
              }
            });
          }
          else {
            return res.json({
              followupEvent: {
                "name": "IncFailevent",
                "data": {

                }
              }

            });

          }
        });
      }
    }

  }

  else {
    if (req.body.result.parameters.Category === 'Network') {
      //googleAssist.simpResponseCarousel(req,res);   calling google assistant dynamic templates
      return res.json(googlemodularity.subcategoryNetwork(req, res));
    }
    if (req.body.result.parameters.Category === 'Hardware') {
      return res.json(googlemodularity.subcategoryHardware(req, res));
    }

    if (req.body.result.parameters.Category === 'Software') {
      return res.json(googlemodularity.subcategorySoftware(req, res));
    }

    //Rest Api Call started

    if (req.body.result.action == "CreateIncident.CreateIncident-custom") {

      var cat = req.body.result.parameters.Category;
      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {
        var success = resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success + ".\nNote it down for further enquiry.";
        return res.json({
          followupEvent: {
            "name": "mainmenuevent",
            "data": {
              "incnumber": success
            }
          }
        });
      });
    }

    if (req.body.result.action == "getincident") {
      var incidentcheck = req.body.result.parameters.incidentno;
      if (isAlphanumeric(incidentcheck)) {
        incident.statusIncident(req.body.result.parameters.incidentno, function (err, resul) {
          var jsonparse = JSON.parse(resul);
          if (jsonparse.hasOwnProperty('result')) {
            console.log(jsonparse.result[0].description);
            return res.json({
              followupEvent: {
                "name": "mainmenueventgetinc",
                "data": {
                  "incstatus": jsonparse.result[0].short_description,
                  "incnumber": jsonparse.result[0].number,
                  "resolved_at": jsonparse.result[0].resolved_at
                }
              }
            });
          }
          else {
            return res.json({
              followupEvent: {
                "name": "IncFailevent",
                "data": {

                }
              }

            });

          }
        });
      }
    }
  }

});

app.get('/script', function (req, res) {
  fs.readFile('mynewfile.txt', 'utf8', function (err, data) {
    res.send(data);
  });
});

var strategy = new facebookStrategy(
  {
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
);

var gogstrategy =new GoogleStrategy(
  {
  // pull in our app id and secret from our auth.js file
  clientID        : configAuth.googleAuth.clientID,
  clientSecret    : configAuth.googleAuth.clientSecret,
  callbackURL     : configAuth.googleAuth.callbackURL

  },
  function (token, refreshToken, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
);



var twitterstrategy =new TwitterStrategy(
  {
  // pull in our app id and secret from our auth.js file
  consumerKey    : configAuth.twitterAuth.consumerKey,
  consumerSecret : configAuth.twitterAuth.consumerSecret,
  callbackURL    : configAuth.twitterAuth.callbackURL

  },
  function (token, tokenSecret, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
);
app.use(expresssession({
  resave: false,
  saveUninitialized: true,
  secret: configAuth.twitterAuth.consumerSecret 
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

passport.use(strategy);
passport.use(gogstrategy);
passport.use(twitterstrategy);

// you can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/login', function (req, res) {
  redirecturi=req.query.redirect_uri;
  res.render('index.ejs');
});

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));


app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));


app.get('/auth/twitter', passport.authenticate('twitter'));


app.get('/fb/callback', passport.authenticate('facebook', {
}),
  function (req, res) {
    console.log(redirecturi);
    res.redirect(redirecturi + "&authorization_code=34s4f545");

  });

  app.get('/gog/callback', passport.authenticate('google', {
  }),
    function (req, res) {
      console.log(redirecturi);
      res.redirect(redirecturi + "&authorization_code=34s4f545");
  
    });

    app.get('/twitter/callback', passport.authenticate('twitter', {
    }),
      function (req, res) {
        console.log(redirecturi);
        res.redirect(redirecturi + "&authorization_code=34s4f545");
    
      });
  

app.listen(portC, function () {
  console.log('AGENT is running my app on  PORT: ' + portC);
});


 