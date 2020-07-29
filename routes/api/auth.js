const express = require("express");
const authController = require("../../controllers/authController");
const router = express.Router();
const passport = require("passport");

router.post("*signUp", authController.signup);

router.get("/google", function (request, response, next) {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    request,
    response,
    next
  );
});

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect dashboard.
    res.redirect("/dashboard");
  }
);

router.get("/local", passport.authenticate("local"), (req, res, next) => {
  res.redirect("/dashboard");
  next();
});

module.exports = router;
