var sql = require("seriate");
var express=require('express');
var app= express();
// Change the config settings to match your
// SQL Server and database
var config = {
    "host": "127.0.0.1",
    "user": "sa",
    "password": "pass@123",
    "database": "SampleDB"
};

sql.setDefaultConfig( config );

app.get('/',function(req,res){
  sql.execute( {
    query: "select 1"
} ).then( function( results ) {
   res.send( results );
}, function( err ) {
    console.log( err );
} );
})


    app.listen(1234);