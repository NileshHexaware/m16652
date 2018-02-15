const ActionsSdkApp = require('actions-on-google').DialogflowApp;


var funResponse=function (req,res){
const app = new ActionsSdkApp({ request: req, response: res }); 
var dispText = app.buildRichResponse()
.addSimpleResponse({speech: 'Please select hjdhdh option from ',
displayText: 'Please select optiohjshgghsn from '});
app.ask(dispText);
}

var funresponseBasiccard=function(req,res)
{
  const app = new ActionsSdkApp({ request: req, response: res }); 
  var dispBasicCard=app.buildRichResponse()
  .addSimpleResponse('Math and prime numbers it is!')
  .addBasicCard(app.buildBasicCard('42 is an even composite number. It' +
      'is composed of three distinct prime numbers multiplied together. It' +
      'has a total of eight divisors. 42 is an abundant number, because the' +
      'sum of its proper divisors 54 is greater than itself. To count from' +
      '1 to 42 would take you about twenty-one…')
      .setTitle('Math & prime numbers')
      .addButton('Read more', 'https://example.google.com/mathandprimes')
      .setImage('https://example.google.com/42.png', 'Image alternate text')
      .setImageDisplay('CROPPED')
)

app.ask(dispBasicCard);

}


module.exports.simpleResponse=funresponseBasiccard;
