var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page
app.get('/about', function(reg, res) {
	res.render('pages/about');
});

server.listen(3000, function() {
	console.log("Server listening on port 3000");
});

module.exports = server;