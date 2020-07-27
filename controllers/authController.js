const User = require("../models/user");

exports.signUp = async (req, res, next) => {
  try {
    const userObj = {
      username: req.body.username,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    };

    const user = await User.create(userObj);

    res.status(201).json({
      status: "success",
      message: "Account created succesfully",
    });

    //pass the user to the req object
    req.user = user;
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err._message,
    });
  }
};

// exports.InvitationignUp = async (req,res,next) => {} //TODO
