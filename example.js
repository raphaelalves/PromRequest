'use strict';
const http = require('http');

const server = http.createServer((req, res) => {
	const PromRequest = require('./PromRequest.js');
	const exampleUrl = new PromRequest('http://google.com.br', { something: 'custom1' });
	const anotherExampleUrl = new PromRequest('http://jovemnerd.com.br', { headers: 'custom2' });
	exampleUrl.post('/search', { data: 'custom3' })
	.then(response => {
		console.log(response);
		return JSON.stringify(response)
	})
	.then(response => {
		anotherExampleUrl.get('/nerdcast').then((anotherResponse) => {
			console.log(anotherResponse);
		});
	});

	res.end();
});

server.listen(7171);
