var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./dbconnecttion');
var routes = require('./routes');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
var server = app.listen(3000, function () {
  console.log(`server listening on port ${server.address().port}`);
});

module.exports = app;
