const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', function (request, response, next) {
  passport.authenticate('google', { scope: ['profile', 'email'] })(
    request,
    response,
    next
  );
});

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect dashboard.
    res.redirect('/dashboard');
  }
);

module.exports = router;
