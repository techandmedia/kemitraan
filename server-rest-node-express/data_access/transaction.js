//methods for fetching mysql data
var connection = require('../connection/MySQLConnect');

function Transaction() {

  // get all users data 
  this.getAllUsers = function (res) {
    connection.init();
    connection.acquire(function (err, con) {
      con.query('SELECT DISTINCT * FROM users', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  // all: function (req, res) {
  //   connection.query('SELECT * FROM inventory', (err, rows) => {
  //     if (!err) {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.status(200).send(JSON.stringify(
  //         {
  //           'result': 'success',
  //           'data': rows
  //         })

  // get all inventory data 
  this.getInventory = function (res) {
    connection.init();
    connection.acquire(function (err, con) {
      con.query('SELECT DISTINCT * FROM inventory', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getUser = function (res) {
    connection.init();
    connection.acquire(function (err, con) {
      con.query('SELECT DISTINCT * FROM users WHERE id = ? LIMIT 1', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  // create: function (req, res, next) {
  //   let respErr;
  //   const name = req.body.name;
  //   const serial = req.body.serial;
  //   const tag = req.body.tag;
  //   const image = req.body.image;
  //   if (
  //     typeof name !== 'undefined'
  //     && typeof serial !== 'undefined'
  //     && typeof tag !== 'undefined'
  //     && typeof image !== 'undefined'
  //   ) {
  //     connection.query('INSERT INTO inventory (name, serial, tag, image) VALUES (?, ?, ?, ?)',
  //       [name, serial, tag, image],
  //       function (err, result) {
  //         handleSuccessOrErrorMessage(err, result, res);
  //       });

  //   } else {
  //     respErr = {
  //       'result': 'error',
  //       'msg': 'Please fill required details'
  //     };
  //     // res.header("Access-Control-Allow-Origin", "*");
  //     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //     res.setHeader('Content-Type', 'application/json');
  //     res.status(200).send(JSON.stringify(respErr));
  //   }
  // },

}

module.exports = new Transaction();