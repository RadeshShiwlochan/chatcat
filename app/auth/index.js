'use strict';
const passport = require('passort');
const config = require('../config');
const Facebook Strategy = require('passport-facebook').Strategy;

let authProcessor = (accessToken, refreshToken, profile, done) => {
		//Find a user in the local db using profile.id
		//if the user is found, return the user data using the done()
		//if the use is not found, create one in the local db and return
	}

module.exports = () => {
	passport.use(new FacebookStrategy(config.fb, authProcessor ));
}