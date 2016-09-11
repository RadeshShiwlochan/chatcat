'use strict';

const express = require('express');
const app     = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
	//res.send('<h1>Hello Express!</h1>' + req.hello);
	res.render('login', {
		pageTitle: 'My Login Page'
	});
});

app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the DashBoard!!');
});

app.listen(app.get('port'), () => {
	console.log('ChatCat Running on Port ', app.get('port'));
});