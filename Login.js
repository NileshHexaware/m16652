var express = require('express');
var app = express();
var portC = process.env.PORT || 4000;

const request = require('request-promise');




const userFieldSet = 'name, link, is_verified, picture';
const pageFieldSet = 'name, category, link, picture, is_verified';


app.post('/', function (req, res) {
    userProfile(function(req,resu){
        console.log(JSON.stringify(resu));
        var success=resu["name"];
    });
});



function userProfile(callback) {

    console.log("User profile");
    var options = {
        method: 'GET',
        url: 'https://graph.facebook.com/me?access_token=EAACdyZATFKroBAEd9NSDzM4ck602h96GoEHeUrFtfKmqYMKV22T5z2n14tvHUn97WDzOBepZAhZAeVSFSdPIj8A68AmZAfTZBVwUWZAaZChmNMAkvbaJjuPrjo69q8B7CU0ME3MjEMEuDNmYDWfsabHXsYH53IJqH95KQuwdN2YR1TNd3YpBFpd4ZBOE7BkwgM0ZD'


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