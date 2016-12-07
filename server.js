var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./routes/routes');

//EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//SERVE PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, './public/')));

//ROUTING FILES
app.use('/', routes);

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});