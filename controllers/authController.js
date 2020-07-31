const User = require('../models/user');

module.exports = {
  signup: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw 'Oups! Something is missing';
      }

      //check if the user exists
      if (await User.findOne({ email })) {
        throw 'User already exist';
      }

      //create new user
      const user = await User.create({ name, email, password });

      if (!user) throw 'Somthing went wrong please try again';

      //pass the user to the next middlewar
      req.user = user;

      res.status(201).json({
        status: 'success',
        message: 'User created successfully',
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  },
  isLoggedIn: async (req, res, next) => {
    try {
      if (req.isAuthenticated()) {
        //check passed
        return next();
      } else {
        //check failed
        res.status(400).send({ message: 'this is an error' });
        return;
      }
    } catch (err) {
      throw err;
    }
  },
  logout: async (req, res) => {
    try {
      req.logout();
      req.session.destroy();
      res.status(200).json({
        status: 'success',
        message: 'logged out successffully',
      });
    } catch (err) {
      throw err;
    }
  },
};
