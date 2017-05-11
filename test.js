'use strict';
let http = require('http');

const server = http.createServer((req, res) => {

	const PromRequest = require('./PromRequest.js');
	var google = new PromRequest('http://google.com.br', { something: 'else' });
	var pagseguro = new PromRequest('http://pagseguro.com.br', { something: 'else' });
	google.get('/search')
		.then((googleResponse) => {
			pageguro.post('/upload', {
				data: googleResponse
			});
		});

	res.end();
});

server.listen(7171);
