const ActionsSdkApp = require('actions-on-google').DialogflowApp;
const app = new ActionsSdkApp({ request: request, response: response });

// simple response
   module.export={
    'simpleresponse':function (app) {
    app.ask(
     app .buildRichResponse()
      .addSimpleResponse('This is a simple response for suggestions')
    )

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log("Success : "+body);
        callback(null, body);
      });
},

'Simplesponse':function (app) {
    app.ask('This is a simple response for suggestions')
    }
}
   