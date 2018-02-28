var express=require('express');
var app=express();
var bodyParser=require('body-parser')
var incident=require('./app3');
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

    app.post('/',function(req,res){


        var fbres={
            "messages": [
                {
                  "type": 4,
                  "platform": "facebook",
                  "payload": {
                    "facebook": {
                      "attachment": {
                        "type": "template",
                        "payload": {
                          "template_type": "button",
                          "text": "Hi! 👋 Welcome to Service Now!Ready to do this? need to log in to your Gmail account.",
                          "buttons": [
                            {
                              "type": "web_url",
                              "url": "https://www.gmail.com",
                              "title": "Login"
                            }
                          ]
                        }
                      }
                    }
                  }
                }
            ]
        };

        return res.json(fbres);
   
    //     incident.logIncident("incident 1111",'',function(err,res){
    // var success=res["result"]["number"];
    // });
    //   console.log("Receives the request and number is"+JSON.stringify(req.body))
 
    //  if(req.body.result.action=="createincident"){
    //   var resagent="Your incident has been created with incident number"+success;
    //   }
    //      return res.json({
    //         speech:resagent,
    //         displayText: resagent,
    //         source:'Service Now'
    //     });
});





app.listen(portC,function(){
console.log("your server is listening to port :" + portC);
});

