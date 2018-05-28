/**
 * @author: Jayesh Agrawal
 * @date: 2th Dec 2017 
 * @desc: Creating server using express.js
 * 
 * http://localhost:8000/api/users
 * http://localhost:8000/api/transactions/1
*/
// var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes/route');
var cors = require('cors');

// creating server instance
var app = express();

app.use(express.static('public'));
// app.use('/public', express.static(__dirname + '/public'));
// var dir = path.join(__dirname, 'public');
// app.use(express.static(dir));
// app.use('/', express.static(path.join(__dirname, 'public')));

// user cors to remove error (No 'Access-Control-Allow-Origin' header is present on the requested resource)
app.use(cors());

// for posting nested object if we have set extended true
app.use(bodyparser.urlencoded({ extended : true}));

// parsing JSON
app.use(bodyparser.json());

// app.get('/', function (req, res) {
//     return res.send({ error: true, message: 'hello' })
// });

//set application route with server instance
routes.configure(app);

// listening application on port 8000
var server = app.listen(8000, function(){
    console.log('Server Listening on port ' + server.address().port);
});