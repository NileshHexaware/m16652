module.exports = {

    'facebookAuth' : {
        'clientID'      :'799109956956017', 
        'clientSecret'  : '730e8800f431b454eb89f8e339025058',
        'callbackURL'   : 'https://flighthexaware.herokuapp.com/fb/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '75091070825-7dt2m8cjuc2vrehbqbevkouf2bj7ghod.apps.googleusercontent.com',
        'clientSecret'  : 'RwG-Oxa1xRd3xZJVBuYnPHJT',
        'callbackURL'   : 'https://flighthexaware.herokuapp.com/gog/callback'
    }

};
