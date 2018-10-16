var bodyParser = require('body-parser'),
express = require('express'),
cookieParser = require('cookie-parser'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Player = require('./api/models/apiModel'), 
user = require('./api/models/user'), 
morgan = require('morgan');

app.use(cookieParser());
// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/apidb', { useNewUrlParser: true }); 
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.cookie('cookieName', 'foobar', { maxAge: 900000, httpOnly: true });
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
	next();
  });

var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route



app.listen(port);

console.log('Running at port ' + port);