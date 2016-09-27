'use strict';
const router = require('express').Router();

router.get('/', (req, res, next) =>{
	res.render('login', {
		pageTitle: 'My Login Page'
	});
});

router.get('/chatroom', (req,res,next) =>{
	console.log("in chatroom");
	res.render('chatroom');
});

router.get('/rooms', (req,res, next) =>{
	console.log("in rooms");
	res.render('rooms');
});

// router.get('/getsession', (req, res, next) =>{
// 	res.send("My Favorite Color " + req.session.favColor);
// });

// router.get('/setsession', (req,res,next) =>{
// 	req.session.favColor = "Red";
// 	res.send("Session Set");
// });

router.get('/about', (req, res, next) => {
	res.render('about');
});

router.use((req,res,next) => {
	res.status(404).sendFile(process.cwd() + '/views/404.htm');
});

module.exports = {
	router: router
}