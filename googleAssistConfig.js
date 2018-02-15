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


var funresponseList=function(req,res)
{
    const app=new ActionsSdkApp({request:req,response:res})
    var disList=
    app.askWithList('Alright! Here are a few things you can learn. Which sounds interesting?',
    // Build a list
    app.buildList('Things to learn about')
      // Add the first item to the list
      .addItems(app.buildOptionItem('MATH_AND_PRIME',
        ['math', 'math and prime', 'prime numbers', 'prime'])
        .setTitle('Math & prime numbers')
        .setDescription('42 is an abundant number because the sum of its ' +
        'proper divisors 54 is greater…')
        .setImage('http://example.com/math_and_prime.jpg', 'Math & prime numbers'))
      // Add the second item to the list
      .addItems(app.buildOptionItem('EGYPT',
        ['religion', 'egpyt', 'ancient egyptian'])
        .setTitle('Ancient Egyptian religion')
        .setDescription('42 gods who ruled on the fate of the dead in the ' +
        'afterworld. Throughout the under…')
        .setImage('http://example.com/egypt', 'Egypt')
      )
      // Add third item to the list
      .addItems(app.buildOptionItem('RECIPES',
        ['recipes', 'recipe', '42 recipes'])
        .setTitle('42 recipes with 42 ingredients')
        .setDescription('Here\'s a beautifully simple recipe that\'s full ' +
        'of flavor! All you need is some ginger and…')
        .setImage('http://example.com/recipe', 'Recipe')
      )
    );

    app.ask(disList);
}


module.exports.simpleResponse=funresponseBasiccard;

module.exports.simpleResponseBasicCard=funresponseBasiccard;

module.exports.simpleResponseList=funresponseList;
