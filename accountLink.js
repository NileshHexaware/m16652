
 client_id = '<the id you get from google>.apps.googleusercontent.com'
 client_secret = '<the secret you get from google>'
 redirect_uri = 'https://your.registered/callback'


 authorization_base_url = "https://accounts.google.com/o/oauth2/v2/auth"
 token_url = "https://www.googleapis.com/oauth2/v4/token"
 scope = [
     "https://www.googleapis.com/auth/userinfo.email",
     "https://www.googleapis.com/auth/userinfo.profile"
 ]

 
 google = OAuth2Session(client_id, scope=scope, redirect_uri=redirect_uri)

 
 authorization_url, state = google.authorization_url(authorization_base_url,

 access_type="offline", prompt="select_account")
authorization_url


redirect_response = raw_input('Paste the full redirect URL here:')


google.fetch_token(token_url, client_secret=client_secret,
         authorization_response=redirect_response)


 r = google.get('https://www.googleapis.com/oauth2/v1/userinfo')
 console.log(r.content);