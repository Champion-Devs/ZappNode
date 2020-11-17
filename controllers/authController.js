const User = require('../models/user');

module.exports = {
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (await User.findOne({ email })) {
        res.send('User Exists');
      } else {
        const user = await User.create({ name, email, password });

        if (!user) {
          res.send('Database Error');
        } else {
          res.status(200).json({ data: 'success' });
        }
      }
    } catch (err) {
      console.log(err);
      res.send('Server Error');
    }
  },

  isLoggedIn: async (req, res, next) => {
    try {
      if (req.isAuthenticated()) {
        //check passed
        return next();
      } else {
        //check failed
        res.status(400).json({ message: 'no logged in user' });
        return;
      }
    } catch (err) {
      throw err;
    }
  },

  isAdmin: async (req, res, next) => {
    try {
      if (req.user.role.type !== 'admin') {
        res.status(400).send({ message: 'this user is not an admin' });
        return;
      } else {
        res.status(200).send({ mesage: 'Is Admin: OK!' });
        return next();
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
