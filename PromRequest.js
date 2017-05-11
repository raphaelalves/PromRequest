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

function doRequest(requestSettings, pathname) {
	const httpLibrary = isHttps(requestSettings.hostname) ? require('https') : require('http');
	requestSettings.hostname = removeProtocolFromURL(requestSettings.hostname);
	requestSettings.path = pathname;
	return new Promise((resolve, reject) => {
		httpLibrary.request(requestSettings, (res) => {
			let responseData = [];
			requestSettings.responseEncode ? res.setEncoding(requestSettings.responseEncode) : res.setEncoding('utf8');
			res.on('data', (requestData) => responseData.push(requestData));
			res.on('error', (requestError) => reject(requestError));
			res.on('end', () => {
				resolve({
					data: responseData,
					headers: res.headers,
					statusCode: res.statusCode
				});
			});
		}).end();
	});
}

function promRequest(url, options) {
	options = Object.assign({}, options, {hostname: url});
	const settings = addRequestOptionsToDefault(options);
	return {
		get: doRequest.bind(this, settings),
		post: doRequest.bind(this, settings),
		put: doRequest.bind(this, settings),
		delete: doRequest.bind(this, settings),
	};
}

module.exports = promRequest;