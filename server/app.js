var express = require('express'),
	app 	= module.exports.app = exports.app = express(),
	path	= require('path');

//live reload
try {
	//in dev
	app.use(require('connect-livereload')());
} catch {
	//production
}

//static files
app.use(express.static(__dirname + '/../public'));

//routing
app.get('/', function(req, res) {
	//req inneholder data fra get, cookie params etc...
	//her kan vi kalle andre apllikasjoner og håndtere data
	//uten å tenke på ssl

	res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.get('/chat', function(req, res) {
	res.sendFile(path.resolve(__dirname + '/../public/chat.html'));
});


//server
var server = app.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("server running on %s:%s", host, port);
});

//socket io
var io = require('socket.io')(server);

io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
});

