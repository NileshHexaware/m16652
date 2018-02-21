
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var isAlphanumeric = require('is-alphanumeric');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var incident=require('./app3');


   app.post('/',function(req,res){
    
    if(req.body.originalRequest.source=='facebook'){
    
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
            "text": "IP Address",
            "postback": "IP Address"
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
     incident.logIncident(req.body.result.parameters.desc,req.body.result.parameters.severity,cat,req.body.result.parameters.subcategory,function(err,resu){
      var success=resu["result"]["number"];
      var resagent="Your incident has been created with incident number:"+success +".\nNote it down for further enquiry.";
    return res.json({
      followupEvent :{
        "name":"mainmenuevent",
        "data":{
          "incnumber":success
        }
      }
    });
  });
}
      
if(req.body.result.action=="getincident")
{
  var incidentcheck=req.body.result.parameters.incidentno;
   if(isAlphanumeric(incidentcheck))
   {
  incident.statusIncident(req.body.result.parameters.incidentno,function(err,resul){
   var jsonparse= JSON.parse(resul);
   if(jsonparse.hasOwnProperty('result'))
    {
    return res.json( {
    followupEvent :{
      "name":"mainmenueventgetinc",
      "data":{
        "incstatus":jsonparse.result[0].short_description,
        "incnumber":jsonparse.result[0].number,
        "resolved_at":jsonparse.result[0].resolved_at
      }
    }
   });
  }
  else
  {
    return res.json({
      followupEvent :{
        "name":"IncFailevent",
        "data":{
         
        }
      }

    });
    
  }
  });
 }
 else
 {
  return res.json({
    followupEvent :{
      "name":"IncFailevent",
      "data":{
       
      }
    }

  });
 }

}
   }
   else if(req.body.originalRequest.source=='slack'){
    
    if (req.body.result.parameters.Category=== 'Network')
    {
      var fbresponse={
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "slack",
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
                "text": "IP Address",
                "postback": "IP Address"
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
    
      if (req.body.result.parameters.Category=== 'Hardware')
      {
      var fbresponse={
      "speech": "",
      "messages": [
        {
          "type": 1,
          "platform": "slack",
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
            "platform": "slack",
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
          followupEvent :{
            "name":"mainmenuevent",
            "data":{
              "incnumber":success
            }
          }
        });
      });
    }
          
    if(req.body.result.action=="getincident")
    {
      var incidentcheck=req.body.result.parameters.incidentno;
      if(isAlphanumeric(incidentcheck))
       {
        incident.statusIncident(req.body.result.parameters.incidentno,function(err,resul){
        var jsonparse= JSON.parse(resul);
        if(jsonparse.hasOwnProperty('result'))
         {
          console.log(jsonparse.result[0].description);
          return res.json( {
          followupEvent :{
          "name":"mainmenueventgetinc",
          "data":{
            "incstatus":jsonparse.result[0].short_description,
            "incnumber":jsonparse.result[0].number,
            "resolved_at":jsonparse.result[0].resolved_at
          }
        }
       });
      }
      else
      {
        return res.json({
          followupEvent :{
            "name":"IncFailevent",
            "data":{
             
            }
          }
    
        });
        
      }
      });
    }
   }
    
  }

   else
   {
    if (req.body.result.parameters.Category=== 'Network')
    {
    var fbresponse={
    "speech": "google assistant",
    "messages": [
      {
        "type":"simple_response",
        "platform": "google",
        "textToSpeech": "Select one"
      },
      {
        "type": "suggestion_chips",
        "platform": "google",
        "suggestions": [
          {
            "title": "DHCP"
            //"postback": "DHCP"
          },
          {
            "title": "DNS"
            //"postback": "DNS"
          },
          {
            "title": "IP Address"
           // "postback": "IP"
          }
        ]
      },
      {
        "type": 0,
        "speech": "this is service now bot"
      }
    ]

  };
  return res.json(fbresponse);
}

  if (req.body.result.parameters.Category=== 'Hardware')
  {
  var fbresponse={
    "speech": "google assistant",
    "messages": [
      {
        "type":"simple_response",
        "platform": "google",
        "textToSpeech": "Select one"
      },
      {
        "type": "suggestion_chips",
        "platform": "google",
        "suggestions": [
          {
            "title": "Monitor"
            //"postback": "DHCP"
          },
          {
            "title": "Keyboard"
            //"postback": "DNS"
          },
          {
            "title": "Mouse"
           // "postback": "IP"
          }
        ]
      },
      {
        "type": 0,
        "speech": "this is service now bot"
      }
    ]
};
return res.json(fbresponse);
  }

  if (req.body.result.parameters.Category=== 'Software')
    {
    var fbresponse={
      "speech": "google assistant",
      "messages": [
        {
          "type":"simple_response",
          "platform": "google",
          "textToSpeech": "Select one"
        },
        {
          "type": "suggestion_chips",
          "platform": "google",
          "suggestions": [
            {
              "title": "Email"
              //"postback": "DHCP"
            },
            {
              "title": "OS"
              //"postback": "DNS"
            },
            {
              "title": "Mac"
             // "postback": "IP"
            }
          ]
        },
        {
          "type": 0,
          "speech": "this is service now bot"
        }
      ]
  };
  return res.json(fbresponse);
}

//Rest Api Call started

  if(req.body.result.action=="CreateIncident.CreateIncident-custom"){

    var cat=req.body.result.parameters.Category;
     incident.logIncident(req.body.result.parameters.desc,req.body.result.parameters.severity,cat,req.body.result.parameters.subcategory,function(err,resu){
      var success=resu["result"]["number"];
      var resagent="Your incident has been created with incident number:"+success +".\nNote it down for further enquiry.";
    return res.json({
      followupEvent :{
        "name":"mainmenuevent",
        "data":{
          "incnumber":success
        }
      }
    });
  });
}
      
if(req.body.result.action=="getincident")
{
  var incidentcheck=req.body.result.parameters.incidentno;
  if(isAlphanumeric(incidentcheck))
   {
  incident.statusIncident(req.body.result.parameters.incidentno,function(err,resul){
   var jsonparse= JSON.parse(resul);
   if(jsonparse.hasOwnProperty('result'))
    {
    console.log(jsonparse.result[0].description);
    return res.json( {
    followupEvent :{
      "name":"mainmenueventgetinc",
      "data":{
        "incstatus":jsonparse.result[0].short_description,
        "incnumber":jsonparse.result[0].number,
        "resolved_at":jsonparse.result[0].resolved_at
      }
    }
   });
  }
  else
  {
    return res.json({
      followupEvent :{
        "name":"IncFailevent",
        "data":{
         
        }
      }

    });
    
  }
  });
 }
}
   }

});

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
