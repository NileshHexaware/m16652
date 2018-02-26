var express = require('express');
var app = express();
var portC = process.env.PORT || 4000;

const request = require('request-promise');


const userFieldSet = 'name, link, is_verified, picture';
const pageFieldSet = 'name, category, link, picture, is_verified';


  app.post('/', (req, res) => {
    const  { queryTerm, searchType } = req.body;

    const options = {
      method: 'GET',
      uri: 'https://graph.facebook.com/search',
      qs: {
        access_token: config.user_access_token,
        q: queryTerm,
        type: searchType,
        fields: searchType === 'page' ? pageFieldSet : userFieldSet
      }
    };

    request(options)
      .then(fbRes => {
        const parsedRes = JSON.parse(fbRes).data; 
        console.log(parsedRes);
        res.json(parsedRes);
      })
  });



app.listen(portC,function(req,res){
    console.log('AGENT is running my app on  PORT: ' + portC);
})