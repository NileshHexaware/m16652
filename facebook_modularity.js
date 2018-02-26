

var funsubcategoryNetwork=function(req,res)
{
    var objsubcatNetwork={
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "facebook",
            "title": "Servicenow",
            "subtitle": "Servicenow",
            "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
            "buttons": [
              {
                "text": "DHCP",
                "postback": "DHCP"
              },
              {
                "text": "DNS",
                "postback": "DNS"
              },
              {
                "text": "IP Address",
                "postback": "IP Address"
              }
            ]
          },
          {
            "type": 0,
            "speech": ""
          }
        ]
    
      };

      return objsubcatNetwork;
}

module.exports.subcategoryNetwork=funsubcategoryNetwork;