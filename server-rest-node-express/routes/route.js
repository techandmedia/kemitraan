/**
 * @author: Jayesh Agrawal
 * @date: 2th Dec 2017 
 * @desc: custom route for fetching data
*/
//custom route for fetching data
var transactions = require('../data_access/transaction');

module.exports = {
    //set up route configuration that will be handle by express server
    configure: function (app) {

        // adding route for users, here app is express instance which provide use
        // get method for handling get request from http server. 
        app.get('/api/users', function (req, res) {
            transactions.getAllUsers(res);
        });

        app.get('/api/inventory', function (req, res) {
          transactions.getInventory(res);
      });

        // here we gets id from request and passing to it transaction method.
        app.get('/api/transactions/:id/', function (req, res) {
            transactions.getTransactionById(req.params.id, res);
        });

    }

};