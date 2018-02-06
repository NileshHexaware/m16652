var request = require("request");
 
module.exports = {
    'logIncident' : function(desc, severity, callback){
 
        console.log("The Final Message Utterance to send POST as Query to Service Now");
            var options = { method: 'POST',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          headers:
           { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json' },
          body:
           { short_description: desc,
             caller_id: 'Pourab Karchaudhuri',
             urgency: severity ,
             comments: 'Chatbot Testing' },
          json: true };
 
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
 
          console.log("Success : "+body);
          callback(null, body);
        });
        
    },
    'statusIncident' : function(ticketnumber, callback){
       
        console.log("The Final Message Utterance to send GET as Query to Service Now");
        var options = { method: 'GET',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          qs: { number: ticketnumber },

          headers:
           { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json' },
          body:
           { short_description: desc,
             caller_id: 'Pourab Karchaudhuri',
             urgency: severity ,
             comments: 'Chatbot Testing' },
          json: true };

          request(options, function(error, response, body) {
            if (error) throw new Error(error);
            console.log("Success : "+body);
            callback(null, body);
          });
        
    },

    
     
  } 
