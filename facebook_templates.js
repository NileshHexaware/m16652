/////////////////////////////////////////Generic/////////////////////////////////////////////
{
    "facebook": {
    
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":[
             {
              "title":"Welcome!",
              "image_url":"https://auto.ndtvimg.com/bike-images/colors/suzuki/intruder/suzuki-intruder-glass-sparkle-black.png?v=14",
              "subtitle":"We have the right hat for everyone.",
              "buttons":[
                {
                  "type":"web_url",
                  "url":"https://petersfancybrownhats.com",
                  "title":"View Website"
                },{
                  "type":"postback",
                  "title":"Start Chatting",
                  "payload":"DEVELOPER_DEFINED_PAYLOAD"
                }              
              ]      
            },
            {
                "title":"Welcome!",
                "image_url":"https://petersfancybrownhats.com/company_image.png",
                "subtitle":"We have the right hat for everyone.",
                "buttons":[
                  {
                    "type":"web_url",
                    "url":"https://petersfancybrownhats.com",
                    "title":"View Website"
                  },{
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                  }              
                ]      
              },
              {
                "title":"Welcome!",
                "image_url":"https://petersfancybrownhats.com/company_image.png",
                "subtitle":"We have the right hat for everyone.",
                "buttons":[
                  {
                    "type":"web_url",
                    "url":"https://petersfancybrownhats.com",
                    "title":"View Website"
                  },{
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                  }              
                ]      
              }
          ]
        }
      }
    
    }
  }


  /////////////////////List///////////////////////////////////////////////////////////////


  {
    "facebook": {
    
      "attachment":{
        "type":"template",
        "payload":{
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
              {
                "title": "Classic T-Shirt Collection",
                "subtitle": "See all our colors",
                "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",          
                "buttons": [
                  {
                    "title": "View",
                    "type": "web_url",
                    "url": "https://peterssendreceiveapp.ngrok.io/collection"
                  }
                ]
              },
              {
                "title": "Classic White T-Shirt",
                "subtitle": "See all our colors",
                "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",          
                "buttons": [
                  {
                    "title": "View",
                    "type": "web_url",
                    "url": "https://peterssendreceiveapp.ngrok.io/collection"
                  }
                ]
              
              },
              {
                "title": "Classic Blue T-Shirt",
                "image_url": "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
                "subtitle": "100% Cotton, 200% Comfortable",
                "buttons": [
                  {
                    "title": "Shop Now",
                    "type": "web_url",
                    "url": "https://peterssendreceiveapp.ngrok.io/shop?item=101"
                  }
                ]        
              }
            ],
             "buttons": [
              {
                "title": "View More",
                "type": "postback",
                "payload": "payload"            
              }
            ]  

        }
      }
    
    }
  }


  ///////////////////////Airline////////////////////////////////////////////////////////


  {
    "facebook": {
       "attachment": {
        "type": "template",
        "payload": {
          "template_type": "airline_boardingpass",
          "intro_message": "You are checked in.",
          "locale": "en_US",
          "boarding_pass": [
            {
              "passenger_name": "SMITH\/NICOLAS",
              "pnr_number": "CG4X7U",
              "seat": "74J",            
              "logo_image_url": "https:\/\/www.example.com\/en\/logo.png",
              "header_image_url": "https:\/\/www.example.com\/en\/fb\/header.png",
              "qr_code": "M1SMITH\/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh",
              "above_bar_code_image_url": "https:\/\/www.example.com\/en\/PLAT.png",
              "auxiliary_fields": [
                {
                  "label": "Terminal",
                  "value": "T1"
                },
                {
                  "label": "Departure",
                  "value": "30OCT 19:05"
                }
              ],
              "secondary_fields": [
                {
                  "label": "Boarding",
                  "value": "18:30"
                },
                {
                  "label": "Gate",
                  "value": "D57"
                },
                {
                  "label": "Seat",
                  "value": "74J"
                },
                {
                  "label": "Sec.Nr.",
                  "value": "003"
                }
              ],
              "flight_info": {
                "flight_number": "KL0642",
                "departure_airport": {
                  "airport_code": "JFK",
                  "city": "New York",
                  "terminal": "T1",
                  "gate": "D57"
                },
                "arrival_airport": {
                  "airport_code": "AMS",
                  "city": "Amsterdam"
                },
                "flight_schedule": {
                  "departure_time": "2016-01-02T19:05",
                  "arrival_time": "2016-01-05T17:30"
                }
              }
            }
          ]
        }
      }
    }
  }


  ///////////////////////////////////Receipt//////////////////////////////////////////

  {
    "facebook": {
       "attachment":{
        "type":"template",
        "payload":{
          "template_type":"receipt",
          "recipient_name":"Stephane Crozatier",
          "order_number":"12345678902",
          "currency":"USD",
          "payment_method":"Visa 2345",        
          "order_url":"http://petersapparel.parseapp.com/order?order_id=123456",
          "timestamp":"1428444852",         
          "address":{
            "street_1":"1 Hacker Way",
            "street_2":"",
            "city":"Menlo Park",
            "postal_code":"94025",
            "state":"CA",
            "country":"US"
          },
          "summary":{
            "subtotal":75.00,
            "shipping_cost":4.95,
            "total_tax":6.19,
            "total_cost":56.14
          },
          "adjustments":[
            {
              "name":"New Customer Discount",
              "amount":20
            },
            {
              "name":"$10 Off Coupon",
              "amount":10
            }
          ],
          "elements":[
            {
              "title":"Classic White T-Shirt",
              "subtitle":"100% Soft and Luxurious Cotton",
              "quantity":2,
              "price":50,
              "currency":"USD",
              "image_url":"http://petersapparel.parseapp.com/img/whiteshirt.png"
            },
            {
              "title":"Classic Gray T-Shirt",
              "subtitle":"100% Soft and Luxurious Cotton",
              "quantity":1,
              "price":25,
              "currency":"USD",
              "image_url":"http://petersapparel.parseapp.com/img/grayshirt.png"
            }
          ]
        }
      }
    }
  }


  ///////////////////media//////////////////////////////////////

  {
    "facebook": {
     "attachment": {
        "type": "template",
        "payload": {
           "template_type": "media",
           "elements": [
              {
                 "media_type": "video",
                 "url": "https://www.facebook.com/TodaysRealityByGenmice/videos/787533561447942/?t=5"
              }
           ]
        }
      }    
    }
  }

  ////////////////