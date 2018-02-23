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
  var fbresponse={
    "speech": "Incident No",
    "messages": [
          {
            "type": 0,
             "platform": "facebook",
             "speech": "Please find status of  below."
          },
          {
            "type": 4,
            "platform": "facebook",
             "payload": {
             "facebook": {
             "attachment": {
              "type": "template",
              "payload": {
               "template_type": "list",
               "top_element_style": "compact",
                "elements": [
                      {
                         "title": "Status",
                          "subtitle": "CLOSED"
                      },
                     {
                        "title": "Priority",
                         "subtitle": "CLOSED"
                      },
                      {
                        "title": "Created On",
                        "subtitle": "creatd";
                      }
                            ]
                          }
                            }
                         }
                            }
              },
              {
                  "type": 2,
                  "platform": "facebook",
                   "title": "Would you like to do more ?",
                   "replies": [
                    "Yes",
                     "No"
                     ]
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
  return res.json(fbresponse);
});

app.listen(portC,function(req,res){
  console.log('AGENT is running my app on  PORT: ' + portC);
});

 