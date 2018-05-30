const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'andri',
  password: '12345',
  database: 'andri'
});

app.get('/employees', function (req, res) {
  console.log(req);
  connection.query('select * from users', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.get('/employees/:id', function (req, res) {
  connection.query('select * from users where id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post('/employees', function (req, res) {
  var postData = req.body;
  // ​INSERT INTO `users` (`id`, `userid`, `fullname`, `usergroup`, `emailid`, `mobile`, `title`, `created_at`) VALUES (NULL, '', '122', '312', '1313', '1313', '1313', CURRENT_TIMESTAMP);
  // connection.query("INSERT INTO users (`id`, `userid`, `fullname`, `usergroup`, `emailid`, `mobile`, `title`) VALUES (NULL, userid, '?', '?', '?', '?', '?');", 
  // INSERT INTO students (name,rollno,marks) VALUES ?", [records], function (err, result, fields) 
  // connection.query("INSERT INTO users (id, userid, fullname, usergroup, emailid, mobile, title, created_at) VALUES ?", [postData.id, postData.userid, postData.fullname, postData.usergroup, postData.emailid, postData.mobile, postData.title, postData.create_at],
  // postData, function (error, results, fields) {
  //   if (error) throw error;
  //   res.end(JSON.stringify(results));
  postData.created_at = new Date();
  connection.query("INSERT INTO users SET ?",
  postData, function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId); // Auto increment id
    res.end(JSON.stringify(results));
  });
});

// INSERT INTO `users` (`id`, `userid`, `fullname`, `usergroup`, `emailid`, `mobile`, `title`, `created_at`) VALUES (NULL, 'pasjd', 'mansdkj', 'bbakdjsba', 'bjkabsdkab', 'absdakjb', 'kjbasdak', CURRENT_TIMESTAMP);

// {
// 	"userid": "PROJ-12345",
// 	"fullname": "Michael Jackson",
// 	"usergroup": "Finance",
// 	"emailid": "michael.jackson@kemitraan.or.id",
// 	"mobile": "08119090123",
// 	"title": "Finance Manager",
// 	"created_at": "2018-05-30T01:59:17.000Z"
// }
// {"userid":"PROJ-12345","fullname":"Michael Jackson","usergroup":"Finance","emailid":"michael.jackson@kemitraan.or.id","mobile": "08119090123","title":"Finance Manager","created_at": "2018-05-30T01:59:17.000Z"}