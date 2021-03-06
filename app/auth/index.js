'use strict';
const passport = require('passport');
const config = require('../config');
const h = require('../helpers');
const logger = require('../logger');
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		//find the user using the _id
		h.findById(id)
			.then(user => done(null, user))
			.catch(error => logger.log('error', 'Error when deserializing the user: ' + error));
	});

	let authProcessor = (accessToken, refreshToken, profile, done) => {
 		//Find a user in the local db using profile.id
 		//if the user is found, return the user data using the done()
 		//if the use is not found, create one in the local db and return
 		h.findOne(profile.id)
 			.then(result => {
 				if(result) {
 					done(null, result);
 				} else {
 					//create a new User
 					h.createNewUser(profile)
 						.then(newChatuser => done(null, newChatUser))
 						.catch(error => logger.log('error', 'Error when creating a new user' + error));
 				}
 			})
 	}
 	passport.use(new FacebookStrategy(config.fb, authProcessor));
 	passport.use(new TwitterStrategy(config.twitter, authProcessor));
}

