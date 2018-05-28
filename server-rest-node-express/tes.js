const express = require('express');
const app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
	port	 : '3306',
    user     : 'dv259_andri',
    password : '12345',
    database : 'dv259321_inventory'
});

connection.connect(function(err) {
  if (err) {
    app.get('/', (req, res) => res.send('Error banget T_T'))
	console.log(err)
  }
  	app.get('/', (req, res) => res.send('Hello Andri Subarnanto'))
});

app.listen(3306, () => console.log('Example app listening on port 3306!'));