'use strict';

const express = require('express');
const app     = express();
const chatCat = require('./app');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

//app.use('/getsession', chatCat.session);

app.use('/', chatCat.router);

app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the DashBoard!!');
});

app.listen(app.get('port'), () => {
	console.log('ChatCat Running on Port ', app.get('port'));
});