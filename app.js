
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var incident=require('./app3');
var googleAssist=require('./googleAssistConfig');

app.post('/',function(req,res){
  googleAssist.simpleResponse(req,res);
  googleAssist.simpleResponseBasicCard(req,res);
  googleAssist.simpleResponseList(req,res);
});

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});

