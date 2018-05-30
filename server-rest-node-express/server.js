var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(express.static('public'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'andri',
  password: '12345',
  database: 'andri'
});

app.get('/users', function (req, res) {
  console.log(req);
  connection.query('SELECT * from users', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.get('/users/:id', function (req, res) {
  connection.query('SELECT * from users where id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post('/users', function (req, res) {
  var postData = req.body;
  // postData.created_at = new Date();
  connection.query("INSERT INTO users SET ?", postData, function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
    res.end(JSON.stringify(results));
  });
});

app.get('/inventory', function (req, res) {
  console.log(req);
  connection.query('SELECT * from inventory', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.get('/inventory/:id', function (req, res) {
  connection.query('SELECT * from inventory where id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post('/inventory', function (req, res) {
  var postData = req.body;
  // postData.created_at = new Date();
  connection.query("INSERT INTO inventory SET ?", postData, function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
    res.end(JSON.stringify(results));
  });
});