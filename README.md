# Node PromRequest
## What?
This project was made to help those who want to use [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) with something similar with the [Node HTTP Request](https://nodejs.org/api/http.html) API, also, this library allow you to define one domain/endpoint and execute REST requests to it's internal endpoints, using the specificed domain as the root, without the need to always type it.

## Why?
The [Node HTTP Request](https://nodejs.org/api/http.html) native API is quite unfriendly considering our project most times,need multiples requests to be queued, this sometimes lead us to a bad habit and a self-destructive/hard to maintain [callback hell](callbackhell.com).

## Who?
The project was developed by me, [Raphael](https://github.com/raphaelalves), between inspiring talks with [Igor](https://github.com/igor9silva). The intent of the project is for study purposes, but feel free to use it wherever you want.

--------------------------------------------------------------------------------------------------------------------------------

## Installing
`npm install prom-request`

## Usage
You can find some usage examples [here](EXAMPLE.MD).
