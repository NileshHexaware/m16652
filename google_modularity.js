

var funsubcategoryNetwork = function (req, res) {
    var objsubcatNetwork = {
        "speech": "google assistant",
        "messages": [
            {
                "type": "simple_response",
                "platform": "google",
                "textToSpeech": "Select one"
            },
            {
                "type": "suggestion_chips",
                "platform": "google",
                "suggestions": [
                    {
                        "title": "DHCP"
                        //"postback": "DHCP"
                    },
                    {
                        "title": "DNS"
                        //"postback": "DNS"
                    },
                    {
                        "title": "IP Address"
                        // "postback": "IP"
                    }
                ]
            },
            {
                "type": 0,
                "speech": "this is service now bot"
            }
        ]

    };

    return objsubcatNetwork;
}

module.exports.subcategoryNetwork = funsubcategoryNetwork;


var funsubcategoryHardware = function (req, res) {
    var objsubcatHardware = {
        "speech": "google assistant",
        "messages": [
          {
            "type":"simple_response",
            "platform": "google",
            "textToSpeech": "Select one"
          },
          {
            "type": "suggestion_chips",
            "platform": "google",
            "suggestions": [
              {
                "title": "Monitor"
                //"postback": "DHCP"
              },
              {
                "title": "Keyboard"
                //"postback": "DNS"
              },
              {
                "title": "Mouse"
               // "postback": "IP"
              }
            ]
          },
          {
            "type": 0,
            "speech": "this is service now bot"
          }
        ]
    };
    return objsubcatHardware;
}

module.exports.subcategoryHardware = funsubcategoryHardware;


var funsubcategorySoftware = function (req, res) {
    var objsubcatSoftware = {
        "speech": "google assistant",
      "messages": [
        {
          "type":"simple_response",
          "platform": "google",
          "textToSpeech": "Select one"
        },
        {
          "type": "suggestion_chips",
          "platform": "google",
          "suggestions": [
            {
              "title": "Email"
              //"postback": "DHCP"
            },
            {
              "title": "OS"
              //"postback": "DNS"
            },
            {
              "title": "Mac"
             // "postback": "IP"
            }
          ]
        },
        {
          "type": 0,
          "speech": "this is service now bot"
        }
      ]
    };
    return objsubcatSoftware;
}

module.exports.subcategorySoftware = funsubcategorySoftware;