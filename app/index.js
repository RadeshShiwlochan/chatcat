'use strict';
const router = require('express').Router();
const db = require('../app/db')

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

//Find a single user base on a key
let findOne = profileID => {
	return db.userModel.findOne({
		'profileId':profileID
	});
}

let createNewUser = profile => {
	return new Promise((resolve, reject) => {
		let newChatUser = new db.userModel({
			profileId: profile.id,
			fullName: profile.displayName,
			profilePic: profile.photos[0].value || ''
		});
		newChatUser.save(error => {
			if(error) {
				reject(error);
			}else {
				resolve(newChatUser);
			}
		})
	})
}

let findById = id => {
	return new Promise((resolve, reject) => {
		db.userModel.findById(id, (error, user) => {
			if(error) {
				reject(error);
			} else {
				resolve(user);
			}
		})
	})
}

//took out router: router here in module exports
module.exports = {
	router: router,
	findOne,
	createNewUser,
	findById
}