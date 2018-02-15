const ActionsSdkApp = require('actions-on-google').DialogflowApp;
var funResponse=function (req,res){
    
    const app = new ActionsSdkApp({ request: request, response: response });  
    
 var dispText = app.buildRichResponse()
 .addSimpleResponse({speech: 'Please select option from ',
   displayText: 'Please select option from '});
 
   app.ask(dispText);

}

module.exports.simpleResponse=funResponse;
