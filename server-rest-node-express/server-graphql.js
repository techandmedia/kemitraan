var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes/route');
var cors = require('cors');
// var graphqlHTTP = require('express-graphql');

// creating server instance
var app = express();

// var { buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

var root = { hello: () => 'Hello world!' };

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));


app.use(express.static('public'));
// app.use('/public', express.static(__dirname + '/public'));
// var dir = path.join(__dirname, 'public');
// app.use(express.static(dir));
// app.use('/', express.static(path.join(__dirname, 'public')));

// user cors to remove error (No 'Access-Control-Allow-Origin' header is present on the requested resource)
app.use(cors());

// for posting nested object if we have set extended true
app.use(bodyparser.urlencoded({ extended : true}));

// parsing JSON
app.use(bodyparser.json());

//set application route with server instance
routes.configure(app);

// listening application on port 8000
var server = app.listen(8000, function(){
    console.log('Server Listening on port ' + server.address().port);
});