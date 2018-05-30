var connection = require('../connection/MySQLConnect');

function Useraccess() {

  // get all users data 
  this.getAllUsers = function (req, res) {
    connection.init();
    connection.query('select * from users', function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
  };

  this.getUserById = function (id, res) {
    connection.init();
    connection.acquire(function (err, con) {
      con.query("SELECT * FROM users WHERE id ='" + id + "' LIMIT 1", function (err, result) {
        // con.query("SELECT * FROM users WHERE id ='" + [req.params.id] + "' LIMIT 1", function (err, result) {
        con.release();
        res.send.json(result); 
        // res.json(result);
      });
    });
  };
}

module.exports = new Useraccess();