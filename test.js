let promRequest = require('./promRequest.js');
let http = require('http');

const server = http.createServer((req, res) => {	
	promRequest.get('www.google.com.br').then((response) => {
		console.log(response);
	}).catch((error) => {
		console.log(error);
	});

	res.end();
});

server.listen(7171);
