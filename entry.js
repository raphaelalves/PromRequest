'use strict';

function addRequestOptionsToDefault(optionsToBeMergedWithDefault) {
	const defaultOptions = {
		port: 80
	};
	return Object.assign({}, defaultOptions, optionsToBeMergedWithDefault);
}

function isHttps(url) {
	return url.match(/^https/);
}

function removeProtocolFromURL(url) {
	return url.replace(/https?:\/\//, '');
}

function doRequest(requestSettings, pathname, dataToBeSent) {
	// Define which library will be used to send the request
	const httpLibrary = isHttps(requestSettings.hostname) ? require('https') : require('http');

	// Remove the URL protocol
	requestSettings.hostname = removeProtocolFromURL(requestSettings.hostname);
	// Add a path to be used along the main url
	requestSettings.path = pathname;

	return new Promise((resolve, reject) => {
		const myRequest = httpLibrary.request(requestSettings, (res) => {
			let responseData = [];

			// Determine which encoding will be used on the request
			requestSettings.responseEncode ? res.setEncoding(requestSettings.responseEncode) : res.setEncoding('utf8');

			// Push each chunk of the data inside the array
			res.on('data', (requestData) => responseData.push(requestData));

			res.on('error', (requestError) => reject(requestError));

			res.on('end', () => {
				resolve({
					data: responseData,
					headers: res.headers,
					statusCode: res.statusCode
				});
			});
		});
		// Check if there's data to apply on the request body
		if (dataToBeSent) {
			const querystring = require('querystring');
			myRequest.write(querystring.stringify(dataToBeSent));
		}

		myRequest.end()
	});
}

function promRequest(url, options) {
	options = Object.assign({}, options, { hostname: url });
	const settings = addRequestOptionsToDefault(options);
	// Return the functions already binding the request settings
	return {
		get:    doRequest.bind(this, settings),
		post:   doRequest.bind(this, settings),
		put:    doRequest.bind(this, settings),
		delete: doRequest.bind(this, settings),
	};
}

module.exports = promRequest;