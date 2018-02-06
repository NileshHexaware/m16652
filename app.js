
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var fbresponse="";

   app.post('/',function(req,res){

    if (req.body.result.action==='Network')
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
            "text": "Network",
            "postback": ""
          },
          {
            "text": "Hardware",
            "postback": ""
          },
          {
            "text": "Software",
            "postback": ""
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
});
 


app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
