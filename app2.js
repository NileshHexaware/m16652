var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way

var args={headers:
           { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json' },
          body:
           { short_description: "",
             caller_id: 'Pourab Karchaudhuri',
             urgency: "" ,
             comments: 'Chatbot Testing' },
          json: true };


var getIncident=  client.get("https://dev18442.service-now.com/api/now/v1/table/incident?number=INC0000001",args
,function (data, response)
 {
    // parsed response body as js object 

    var obj=JSON.stringify(data);
   console.log(obj);

    //console.log(data);
    // raw response 
   // console.log(response);
});


 
