'use strict';
const passport = require('passort');
const config = require('../config');
const Facebook Strategy = require('passport-facebook').Strategy;

module.exports = () => {
	passport.use(new FacebookStrategy());
}