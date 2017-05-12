## Examples

### Import
Import the library using one of the follow examples (Import syntax were not avaiable on node at the point this was written):
*```const request = require('PromRequest');```
*```import request from PromRequest;```

### Initialization
You can start using in any syntax described below:

```javascript
const request = require('PromRequest');
request('http://google.com.br', {
		data: [],
		headers: {
			'content-type': 'application/json' 
});
```

or if you are going to do more requests to the same domain.

```javascript
const PromRequest = require('PromRequest');
let exampleUrl = new PromRequest('http://google.com.br', {
	headers: {
		'content-type': 'application/json'
	});
```
	const PromRequest = require('./PromRequest.js');
	var exampleUrl = new PromRequest('http://google.com.br', { something: 'custom1' });
	var anotherExampleUrl = new PromRequest('http://jovemnerd.com.br', { headers: 'custom2' });
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