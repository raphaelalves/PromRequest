## API

### PromRequest(String url, [Object options]) - Constructor function

| Param | Description |
|-------|-------------|
| *url*     | The root URL to be used in request endpoints |
| *options* | Can carry additional settings to configure the request |

#### Example:
```javascript
let exampleUrl = new PromRequest('http://google.com.br', {
	port: 80,
	timeout: 3000,
	headers: {
		'content-type': 'application/json',
	});
```

### .get(String endpoint)

| Param | Description |
|-------|-------------|
| *endpoint*     | The relative path to be included after the root URL |
| *options* | Can carry additional settings to configure the request |