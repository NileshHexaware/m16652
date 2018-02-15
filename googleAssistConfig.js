const ActionsSdkApp = require('actions-on-google').DialogflowApp;
var funResponse=function (req,res){
    
    const app = new ActionsSdkApp({ request: req, response: res });  
    
 var dispText = app.buildRichResponse()
 .addSimpleResponse({speech: 'Please select hjdhdh option from ',
   displayText: 'Please select optiohjshgghsn from '});
 
   app.ask(dispText);

}

module.exports.simpleResponse=funResponse;
