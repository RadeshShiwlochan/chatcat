'use strict';

const express = require('express');
const app     = express();

let helloMiddleware = (req, res, next) => {
	req.hello = "Hello!, this is the helloMiddleware! ";
	next();
}

app.use(helloMiddleware);

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res, next) => {
	res.send('<h1>Hello Express!</h1>' + req.hello);
});

app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the DashBoard!!');
});

app.listen(app.get('port'), () => {
	console.log('ChatCat Running on Port ', app.get('port'));
});