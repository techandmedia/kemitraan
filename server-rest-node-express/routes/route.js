var useraccess = require('../data_access/user-access');

module.exports = {
    configure: function (app) {

        app.get('/api/users', function (req, res) {
            useraccess.getAllUsers(res);
        });

        app.get('/api/user/:id', function (req, res) {
            useraccess.getUserById(req.id, res);
        })

        // // here we gets id from request and passing to it transaction method.
        // app.get('/api/transactions/:id/', function (req, res) {
        //     transactions.getTransactionById(req.params.id, res);
        // });

    }

};