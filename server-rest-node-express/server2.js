var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'dv259_andri',
  password: '12345',
  database: 'dv259321_inventory'
});

app.use(express.static('public'));
app.use(cors());

// for posting nested object if we have set extended true
app.use(bodyparser.urlencoded({ extended: true }));

// parsing JSON
app.use(bodyparser.json());

//set application route with server instance
// routes.configure(app);

app.get('/', function (req, res) {
  // console.log(req);
  res.end('Helloooo from Nodejs');
  // res.end(JSON.stringify(results));
});


// listening application on port 8000
var server = app.listen(8000, function () {
  console.log('Server Listening on port ' + server.address().port);
});


connection.connect(function (err) {
  if (err) {
    app.get('api/', (req, res) => res.send('Error banget T_T'))
    console.log(err)
  }
  app.get('/api', (req, res) => res.send('Hello Andri Subarnanto'))
});

app.get('/api/inventory', function (req, res) {
  console.log(req);
  connection.query('select * from inventory', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
