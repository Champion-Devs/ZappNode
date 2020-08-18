const express = require('express');
const authController = require('../../controllers/authController');
const router = express.Router();
const passport = require('passport');

router.post('/signUp', authController.signup);
router.post('/logout', authController.logout);
router.post('/google', function (request, response, next) {
  passport.authenticate('google', { scope: ['profile', 'email'] })(request, response, next);
});

router.post('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect dashboard.
  res.redirect('/dashboard');
});

router.post('/local', passport.authenticate('local'), (req, res, next) => {
  res.redirect('/dashboard');
  next();
});

module.exports = router;
