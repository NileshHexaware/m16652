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

  console.log("app started nilesh");
  var fbresponse={
    "speech": "hiiiii",
    "messages": [
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
                    "title": "Classic T-Shirt Collection",
                    "subtitle": "See all our colors",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",
                    "buttons": [
                      {
                        "title": "View",
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/collection"
                      }
                    ]
                  },
                  {
                    "title": "Classic White T-Shirt",
                    "subtitle": "See all our colors",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",
                    "buttons": [
                      {
                        "title": "View",
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/collection"
                      }
                    ]
                  },
                  {
                    "title": "Classic Blue T-Shirt",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
                    "subtitle": "100% Cotton, 200% Comfortable",
                    "buttons": [
                      {
                        "title": "Shop Now",
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/shop?item=101"
                      }
                    ]
                  }
                ],
                "buttons": [
                  {
                    "title": "View More",
                    "type": "postback",
                    "payload": "payload"
                  }
                ]
              }
            }
          }
        }
      },
      {
        "type": 0,
        "speech": "Hi!"
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

 