var express = require('express');
// var bodyparser = require('body-parser');
var routes = require('./routes/user-route');
var cors = require('cors');
var app = express();

app.use(express.static('public'));
app.use(cors());

// for posting nested object if we have set extended true
// app.use(bodyparser.urlencoded({ extended : true}));

// parsing JSON
// app.use(bodyparser.json());

//set application route with server instance
routes.configure(app);

// listening application on port 8000
var server = app.listen(8000, function(){
    console.log('Server Listening on port ' + server.address().port);
});