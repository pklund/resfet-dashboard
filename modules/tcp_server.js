// THIS FILE IS ONLY FOR TESTING PURPOSES
var net = require('net');

var server = net.createServer(function(socket) {
	//socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(5000, '127.0.0.1');
