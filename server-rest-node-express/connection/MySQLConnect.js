var mysql = require('mysql');
function MySQLConnect() {
  this.pool = null;

  // Init MySql Connection Pool
  this.init = function () {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      // port: 3306,
      user: 'dv259_andri',
      password: '12345',
      database: 'dv259321_inventory'
    });
  };

  // acquire connection and execute query on callbacks
  this.acquire = function (callback) {
    this.pool.getConnection(function (err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new MySQLConnect();
