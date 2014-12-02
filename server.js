var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var passport = require('passport');

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(expressValidator());

require('./server/mongoose.js')();
require('./server/passport.js')();
require('./server/routes')(app);

app.listen(5678, function(){
	console.log('App running on port: ' + 5678);
});