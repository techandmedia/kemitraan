//methods for fetching mysql data
var connection = require('../connection/MySQLConnect');

function Transaction() {

  // get all users data 
  this.getAllUsers = function (res) {
    connection.init();
    connection.acquire(function (err, con) {
      con.query('SELECT DISTINCT * FROM user', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

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

  this.getTransactionById = function (id, res) {
    connection.init();
    connection.acquire(function (err, con) {
      var query = 'SELECT date_format(t.TransactionDate,\'%d-%b-%Y\') as date, ' +
        'CASE WHEN t.TransactionAmount >= 0 THEN t.TransactionAmount ' +
        'ELSE 0 END AS Credit, CASE WHEN t.TransactionAmount < 0 THEN ' +
        't.TransactionAmount ELSE 0 END AS Debit, t.Balance FROM ' +
        'transactions t INNER JOIN users u ON t.UserId=u.UserID WHERE t.UserId = ?;';
      con.query(query, id, function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

}

module.exports = new Transaction();