var useraccess = require('../data_access/user-access');

module.exports = {
  configure: function (app) {

    app.get('/api/users', function (req, res) {
      useraccess.getAllUsers(res);
    });

    app.get('/api/user/:id', function (req, res) {
      useraccess.getUserById(req.params.id, res);
    })
  }
};