
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

    var cat=req.body.result.contexts[0].parameters.Category;
     incident.logIncident(req.body.result.parameters.desc,req.body.result.parameters.severity,cat,req.body.result.parameters.subcategory,function(err,resu){
      var success=resu["result"]["number"];
      var resagent="Your incident has been created with incident number:"+success +".\nNote it down for further enquiry.";
    return res.json({
      speech:resagent,
      displayText: resagent,
      source:'Service Now'
    });
  });
}
      
if(req.body.result.action=="getincident")
{
  incident.statusIncident(req.body.result.parameters.incidentno,function(err,resul){
   var jsonparse= JSON.parse(resul);
   if(jsonparse.hasOwnProperty('result'))
    {
    console.log(jsonparse.result[0].description);
    return res.json( {
    followupEvent :{
      "name":"mainmenuevent",
      "data":{
        "incstatus":jsonparse.result[0].description,
        "incnumber":jsonparse.result[0].number,
        "resolved_at":jsonparse.result[0].resolved_at
      }
    }
   });
  }
  else
  {
    return res.json({
      speech:"This Incident number record does not exist.",
      displayText:"This Incident number record does not exist.",
      source:"Service Now"
    });
  }
  });
}

});

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
