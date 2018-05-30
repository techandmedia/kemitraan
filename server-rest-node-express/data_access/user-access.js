var connection = require('../connection/MySQLConnect');

function Useraccess() {

  // get all users data 
  this.getAllUsers = function (res) {
    connection.init();
    connection.acquire(function (err, con) {
      con.query('SELECT * FROM users', function (err, result) {
        con.release();
        // res.send.json(result); Harus pakai body parser
        res.json(result);
      });
    });
  };

  this.getUserById = function (id, res) {
    connection.init();
    connection.acquire(function (err, con) {
      con.query("SELECT * FROM users WHERE id ='" + id + "' LIMIT 1", function (err, result) {
        con.release();
        res.json(result);
      });
    });
  };

//   this.getTransactionById = function (id, res) {  
//     // initialize database connection  
//     connection.init();  
//     // get id as parameter to passing into query and return filter data  
//     connection.acquire(function (err, con) {  
//         var query = 'SELECT date_format(t.TransactionDate,\'%d-%b-%Y\') as date, ' +  
//             'CASE WHEN t.TransactionAmount >= 0 THEN t.TransactionAmount ' +  
//             'ELSE 0 END AS Credit, CASE WHEN t.TransactionAmount < 0 THEN ' +  
//             't.TransactionAmount ELSE 0 END AS Debit, t.Balance FROM ' +  
//             'transactions t INNER JOIN users u ON t.UserId=u.UserID WHERE t.UserId = ?;';  
//         con.query(query, id, function (err, result) {  
//                 con.release();  
//                 res.send(result);  
//             });  
//     });  
// };  


  // create: function (req, res, next) {
  //   let response;
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

  //   }
}

module.exports = new Useraccess();