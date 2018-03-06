
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

var passport=require('passport');


app.post('/', function (req, res) {

  if (req.body.originalRequest.source == 'facebook') {

    if (req.body.result.parameters.Category === 'Network') {
      return res.json(fbmodularity.subcategoryNetwork(req, res));
    }

    if (req.body.result.parameters.Category === 'Hardware') {
      return res.json(fbmodularity.subcategoryHardware(req, res));
    }

    if (req.body.result.parameters.Category === 'Software') {
      return res.json(fbmodularity.subcategorySoftware(req, res));
    }

    //Rest Api Call started

    if (req.body.result.action == "CreateIncident.CreateIncident-custom") {
      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, req.body.result.parameters.Category, req.body.result.parameters.subcategory, function (err, resu) {
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

app.get('/login',function(req,res){
  res.render('index.ejs');
});

app.get('/auth/facebook', passport.authenticate('facebook', { 
  scope : ['public_profile', 'email']
}));



app.get('/auth/facebook/callback',
passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/'
}));


function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}



app.listen(portC, function () {
  console.log('AGENT is running my app on  PORT: ' + portC);
});
