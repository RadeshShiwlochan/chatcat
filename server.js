'use strict';

const express = require('express');
const app     = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res, next) => {
	res.send('<h1>Hello Express!</h1>');
});

app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the DashBoard!!');
});

app.listen(app.get('port'), () => {
	console.log('ChatCat Running on Port ', app.get('port'));
});