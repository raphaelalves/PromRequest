'use strict';

function setupDefaultRequestOptions(optionsToBeMergedWithDefault) {
	const defaultOptions = {
		port: 80
	};

	return Object.assign({}, defaultOptions, optionsToBeMergedWithDefault)
}

function isHttps(url) {
	return url.match(/^https/);
}

function doRequest(requestSettings) {
	const httpLibrary = isHttps(requestSettings.hostname) ? require('https') : require('http');
	return new Promise((resolve, reject) => {
		httpLibrary.request(requestSettings, (res) => {
			let responseData = [];
			requestSettings.encode ? res.setEncoding(requestSettings.encode) : res.setEncoding('utf8');
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

function post(url, settings) {
	settings = setupDefaultRequestOptions({
		method: 'POST',
		hostname: url
	});
	return doRequest(settings);
}

function get(url, settings) {
	settings = setupDefaultRequestOptions({
		method: 'GET',
		hostname: url
	});
	return doRequest(settings);
}

const promRequest = {
	post: post,
	get: get
};

module.exports = promRequest;
