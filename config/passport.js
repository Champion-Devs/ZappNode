const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');

// Google Strategy
module.exports = function (passport) {
	passport.use(
		new GoogleStrategy(
			{
				clientID: keys.GOOGLE_CLIENT_ID,
				clientSecret: keys.GOOGLE_CLIENT_SECRET,
				callbackURL: '/api/auth/google/callback',
				proxy: true,
			},
			(accessToken, refreshToken, profile, cb) => {
				console.log(accessToken);
				console.log(profile);
			}
		)
	);
	// Local Strategy
	passport.use(
		new LocalStrategy((username, password, done) => {
			//match user
			userModel.findOne({ username: username }, (err, user) => {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false, { message: 'Incorrect Username' });
				}
				if (user) {
					bcrypt.compare(password, user.password, (err, match) => {
						//passwords match
						if (err) throw err;
						if (match) {
							return done(null, user);
						} else {
							return done(null, false, { message: 'Incorrect Password' });
						}
					});
				}
			});
		})
	);

	passport.serializeUser(function(user, done) {
		done(null, user._id);
	  });
	
	  passport.deserializeUser(function(id, done) {
		userModel.findById(id, function(err, user) {
		  done(err, user);
		});
	  });
};

// Facebook Strategy
