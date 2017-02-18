'use strict';

const express  = require('express');
const app      = express();
const chatCat  = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', chatCat.router);

/*
app.get('/', (req, res, next) => {
	res.send('<h1>Hello ChatCat!</h1>');
});
*/

// app.get('/auth/facebook':passport.authenticate('facebook'),
// 	'/auth/facebook/callback': passport.authenticate('facebook', {
// 		successRedirect: '/rooms',
// 		failureRedirect: '/'
// 	}));

app.listen(app.get('port'), () => {
	console.log('ChatCat Running on Port ', app.get('port'));
});