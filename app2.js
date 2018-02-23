var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var isAlphanumeric = require('is-alphanumeric');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var incident=require('./DAL');

app.post('/',function(req,res){

  console.log("app started");
  var fbresponse={
    "speech": "",
    "messages": [
      {
        "facebook": {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "list",
              "top_element_style": "compact",
              "elements": [
                {
                  "title": "Bus Schedule",
                  "image_url": "https://cdn2.iconfinder.com/data/icons/travel-set-2/512/18-512.png",
                  "subtitle": "Category for bus's schedule related queries",
                  "buttons": [
                    {
                      "title": "Select",
                      "type": "postback",
                      "payload": "schedule"
                    }
                  ]
                },
                {
                  "title": "Quality of Service",
                  "image_url": "https://www.hbs.edu/mba/PublishingImages/icon-handshake.png",
                  "subtitle": "Category for our service quality related queries",
                  "buttons": [
                    {
                      "type": "postback",
                      "title": "Select",
                      "payload": "quality of service"
                    }
                  ]
                },
                {
                  "title": "Payment related",
                  "image_url": "https://www.rupay.co.in/sites/all/themes/rupay/images/cashback.png",
                  "subtitle": "Category for all payment related queries",
                  "buttons": [
                    {
                      "type": "postback",
                      "title": "Select",
                      "payload": "payment"
                    }
                  ]
                }
              ]
            }
          }
        }
      }
        ]
    


    /////////////////////////////////////card///////////////////////////////////
    // "speech": "",
    // "messages": [
    //   {
    //     "type": 1,
    //     "platform": "facebook",
    //     "title": "Servicenow",
    //     "subtitle": "Servicenow",
    //     "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
    //     "buttons": [
    //       {
    //         "text": "DHCP",
    //         "postback": "DHCP"
    //       },
    //       {
    //         "text": "DNS",
    //         "postback": "DNS"
    //       },
    //       {
    //         "text": "IP Address",
    //         "postback": "IP Address"
    //       }
    //     ]
    //   },
    //   {
    //     "type": 0,
    //     "speech": ""
    //   }
    // ]

  };
  console.log(fbresponse);
  return res.json(fbresponse);
});

app.listen(portC,function(req,res){
  console.log('AGENT is running my app on  PORT: ' + portC);
});

 