const ActionsSdkApp = require('actions-on-google');
const app = new ActionsSdkApp({ request: request, response: response });



   // simple response
   module.export={
    simpleresponse:function (app) {
    app.ask(app
      .buildRichResponse()
      .addSimpleResponse('This is a simple response for suggestions')
    )
}
   }
   