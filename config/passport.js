const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

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
};

// Facebook Strategy

// Local Strategy
