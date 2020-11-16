const express = require('express');
const authController = require('../../controllers/authController');
const router = express.Router();
const passport = require('passport');

router.post('/signUp', authController.signup);
router.get('/logout', authController.logout);
router.post('/google', function (request, response, next) {
  passport.authenticate('google', { scope: ['profile', 'email'] })(request, response, next);
});

router.post('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect dashboard.
  res.redirect('/dashboard');
});

router.post('/local', passport.authenticate('local'), (req, res, next) => {
  //if there's no user, send an error
  if (!req.user) res.status(400).send({ message: 'No such user' });
  //otherwise send the user
  else res.json(req.user);
  next();
});

router.get('/active', authController.isLoggedIn, (req, res) => {
  res.json(req.user);
});
module.exports = router;
