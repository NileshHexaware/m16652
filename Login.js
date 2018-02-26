var express = require('express');
var app = express();
var portC = process.env.PORT || 4000;

const request = require('request-promise');




const userFieldSet = 'name, link, is_verified, picture';
const pageFieldSet = 'name, category, link, picture, is_verified';


app.post('/', function (req, res) {
    userProfile(function(req,resu){
        console.log(JSON.stringify(resu));
    });
});



function userProfile(callback) {

    console.log("User profile");
    var options = {
        method: 'GET',
        url: 'https://graph.facebook.com/me?access_token=EAAVjLMRrvo4BAFoYzACgMRht9ZBpZBlwlbZBM60gwiHtMDdfwDvv3ZAtyZBTODj6eErxfs0tZC9x8nSae1jcgErCpoW6ICIlXFCEOkQjWSQVubhheucSzZB00oSwGZCcz2Cahc6rCRyCoKGIkbF2gV7G9otZChhnPhWwN8sNnGFfS3oUBO2kuSw8XL9bTtZAlxC65YS10UJinJkAZDZD'


        // qs: { username: name },
    };


    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log("Success : " + body);
        callback(null, body);
    });
}


app.listen(portC, function (req, res) {
    console.log('AGENT is running my app on  PORT: ' + portC);
});