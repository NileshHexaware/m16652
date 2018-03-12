var incident = require('./DAL');

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


var funsubcategoryHardware=function(req,res)
{
  var objsubcatHardware={
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
            "text": "Monitor",
            "postback": "Monitor"
          },
          {
            "text": "Keyboard",
            "postback": "Keyboard"
          },
          {
            "text": "Mouse",
            "postback": "Mouse"
          }
        ]
      },
      {
        "type": 0,
        "speech": ""
      }
    ]
  };
  return objsubcatHardware;
}

module.exports.subcategoryHardware=funsubcategoryHardware;


var funsubcategorySoftware=function(req,res)
{
  var objsubcatSoftware={
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
            "text": "Email",
            "postback": "Email"
          },
          {
            "text": "OS",
            "postback": "OS"
          },
          {
            "text": "Mac",
            "postback": "Mac"
          }
        ]
      },
      {
        "type": 0,
        "speech": ""
      }
    ]
  };
  return objsubcatSoftware;
}

module.exports.subcategorySoftware=funsubcategorySoftware;