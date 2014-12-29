var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	
	var drinks = [
		{ name: 'Bloody Mary', drunkness: 2 },
		{ name: 'Gin and tonic', drunkness: 3 },
		{ name: 'Vodka and lemonade', drunkness: 4 } 
	];

	var tagline = "Let's drink cocktails";

	res.render('pages/index', {
		drinks: drinks,
		tagline: tagline
	});
});

// about page
app.get('/about', function(reg, res) {
	res.render('pages/about');
});

server.listen(3000, function() {
	console.log("Server listening on port 3000");
});

module.exports = server;