'use strict';
const http = require('http');

const server = http.createServer((req, res) => {
	const PromRequest = require('./entry.js');
	const exampleUrl = new PromRequest('http://google.com.br', { port: 80 });
	exampleUrl.post('/search', {algo : '1'})
	.then((response) => {
		console.log('I did it');
	})
	.catch(() => {
		console.log('error!');
	});
	
	
	
	// const anotherExampleUrl = new PromRequest('http://jovemnerd.com.br', { headers: 'custom2' });
	// exampleUrl.post('/search', { data: 'custom3' })
	// .then(response => {
	// 	console.log(response);
	// 	return JSON.stringify(response)
	// })
	// .then(response => {
	// 	anotherExampleUrl.get('/nerdcast').then((anotherResponse) => {
	// 		console.log(anotherResponse);
	// 	});
	// });

	res.end();
});

server.listen(7171);
