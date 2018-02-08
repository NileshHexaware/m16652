
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var incident=require('./app3');


   app.post('/',function(req,res){

    if (req.body.result.parameters.Category=== 'Network')
    {
    var fbresponse={
    "speech": "",
    "messages": [
      {
        "type": 1,
        "platform": "facebook",
        "title": "Servicenow",
        "subtitle": "Servicenow",
        "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
        "buttons": [
          {
            "text": "DHCP",
            "postback": "DHCP"
          },
          {
            "text": "DNS",
            "postback": "DNS"
          },
          {
            "text": "IP",
            "postback": "IP"
          }
        ]
      },
      {
        "type": 0,
        "speech": ""
      }
    ]

    //   console.log('Received the request & it is:::'+JSON.stringify(req.body));
    //   if(req.body.result.action=='input.personaldetails')
    //     {     var resagent='Your Ticket has been booked ';
    //  console.log('request are'+resagent);
    //   return res.json({
    //     speech:resagent,
    //     displayText: resagent,
    //     source:'Flight Booking'
    //   });
    // }
  };
  return res.json(fbresponse);
}

  if (req.body.result.parameters.Category=== 'Hardware')
  {
  var fbresponse={
  "speech": "",
  "messages": [
    {
      "type": 1,
      "platform": "facebook",
      "title": "Servicenow",
      "subtitle": "Servicenow",
      "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
      "buttons": [
        {
          "text": "Monitor",
          "postback": "Monitor"
        },
        {
          "text": "Keyboard",
          "postback": "Keyboard"
        },
        {
          "text": "Mouse",
          "postback": "Mouse"
        }
      ]
    },
    {
      "type": 0,
      "speech": ""
    }
  ]
};
return res.json(fbresponse);
  }

  if (req.body.result.parameters.Category=== 'Software')
    {
    var fbresponse={
    "speech": "",
    "messages": [
      {
        "type": 1,
        "platform": "facebook",
        "title": "Servicenow",
        "subtitle": "Servicenow",
        "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
        "buttons": [
          {
            "text": "Email",
            "postback": "Email"
          },
          {
            "text": "OS",
            "postback": "OS"
          },
          {
            "text": "Mac",
            "postback": "Mac"
          }
        ]
      },
      {
        "type": 0,
        "speech": ""
      }
    ]
  };
  return res.json(fbresponse);
}

//Rest Api Call started

  if(req.body.result.action=="CreateIncident.CreateIncident-custom"){
     incident.logIncident(req.body.result.parameters.desc,req.body.result.parameters.severity,req.body.result.context[0].parameters.category,req.body.result.parameters.subcategory,function(err,resu){
      var success=resu["result"]["number"];
      var resagent="Your incident has been created with incident number"+success;
    return res.json({
      speech:resagent,
      displayText: resagent,
      source:'Service Now'
    });
  });
}
      

    });

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
