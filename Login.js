var express = require('express');
var app = express();
var portC = process.env.PORT || 4000;

const request = require('request-promise');




const userFieldSet = 'name, link, is_verified, picture';
const pageFieldSet = 'name, category, link, picture, is_verified';


app.post('/', function (req, res) {
    userProfile(function(req,resu){
        console.log(JSON.stringify(resu));
        var jsonparse= JSON.parse(resu);
        console.log(jsonparse.Success[0].name);
        success= jsonparse.Success[0].name;
        
        return res.json({
            followupEvent :{
              "name":"loginevent",
              "data":{
                "username":success
              }
            }
          });
    });
});



function userProfile(callback) {

    console.log("User profile");
    var options = {
        method: 'GET',
        url: 'https://graph.facebook.com/me?access_token=EAALWyUke73EBAHDHKenLOZA3FerZAL1GNv2WrUdvZCZBYQd5s3t8c5ATaMxMXwyc41G2LDrp3c7BlhAg4aIkUa761f2r16oEUeTDDCBi7aZAC0emBawvOi3IcX85GO72A3OBHULQqU4gFoknFzTZCpjIZAK67Wwoy7CTqWLJv9dwCpZAuz60l0VPFn2pBWB3kcQZD'


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