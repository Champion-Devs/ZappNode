const User = require('../models/user');
const bcrypt = require('bcrypt');

//use these for operations related to user subscriptions
monitor = {
  create: async () => {},
  read: async () => {},
  update: async () => {},
  delete: async (req, res) => {
    try {
      const { user_id, monitor_id } = req.body;
      User.findOneAndUpdate(
        { _id: user_id },
        { $pull: { monitors: { _id: monitor_id } } }.exec((err, success) => {
          if (err) throw err;
          res.json(success);
        }),
      );
    } catch (err) {
      throw err;
    }
  },
};
//use these for operations related to more "static" user information
user = {
  create: async () => {}, //placeholder
  read: async () => {}, //palceholder
  update: async (req, res) => {
    try {
      const user = req.user;
      // get the data the user want to update
      const data = {};
      Object.keys(req.body).forEach((cur) => {
        if (cur === 'password' || cur === 'name' || cur === 'email') {
          data[cur] = req.body[cur];
        }
      });

      //check if the new email exist in the db
      let result;
      if (data.email) {
        result = await User.findOne({ email: data.email });
        if (result) throw 'Email already exist';
      }

      //hash the password
      let hashedPassword;
      if (data.password) {
        hashedPassword = await bcrypt.hash(data.password, 12);
        data.password = hashedPassword;
      }
      // update
      await User.findByIdAndUpdate(user._id, data, { runValidators: true });

      //if password changed => logout
      if (data.password) return res.redirect('auth/logout');

      res.status(200).json({
        status: 'success',
        message: 'profil updated successfullu',
      });
    } catch (err) {
      res.status(200).json({
        status: 'fail',
        message: err,
      });
    }
  },
  delete: async () => {}, //placeholder
};

module.exports = {
  monitor,
  user,
};
