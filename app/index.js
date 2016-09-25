'use strict';
const router = require('express').Router();

router.get('/', (req, res, next) =>{
	res.render('login', {
		pageTitle: 'My Login Page'
	});
});

router.get('/chatroom', (req,res,next) =>{
	res.render('chatroom');
});

router.get('/rooms', (req,res, next) =>{
	res.render('rooms');
});

// router.get('/getsession', (req, res, next) =>{
// 	res.send("My Favorite Color " + req.session.favColor);
// });

// router.get('/setsession', (req,res,next) =>{
// 	req.session.favColor = "Red";
// 	res.send("Session Set");
// });

router.use((req,res,next) => {
	res.status(404).sendFile(process.cwd() + '/views/404.htm');
});

module.exports = {
	router: router
}