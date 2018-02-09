

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
    // var incdesc=jsonparse["result"]["description"];
    // var incresolved_at=jsonparse["result"]["resolved_at"];
    // var incbusiness_stc=jsonparse["result"]["business_stc"];
    // var incsys_mod_count=jsonparse["result"]["sys_mod_count"];
  console.log(jsonparse.result[0].description);
    var incstatus="Your incident status is below \n 1.Incident Descrption = "+jsonparse.result[0].description ;
    //+"\n 2.Incident resolved on = "+jsonparse.result[0].incresolved_at+"\n 3.Incident business status = "+jsonparse.result[1].incbusiness_stc+"\n 4.Incident system mode count = "+jsonparse.result[1].incsys_mod_count;
    return res.json( {
    speech:incstatus,
    displayText:incstatus,
    source:'Service Now'
    });
  });
}

});

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
