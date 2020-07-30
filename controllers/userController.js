const userModel = require('../models/user');
const bcrypt = require('bcrypt');

//use these for operations related to user subscriptions
monitor = {
  create: async () => {},
  read: async () => {},
  update: async () => {},
  delete: async (req, res) => {
    try {
      const { user_id, monitor_id } = req.body;
      userModel.findOneAndUpdate(
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
    // get the current user
    const user = req.user;
    // get the data the user want to update
    const data = {};
    const { name, email, password } = req.body;
    Object.keys(req.body).forEach((cur) => {
      if (cur === 'password') {
        console.log(cur);
      }
    });
    // update
  },
  delete: async () => {}, //placeholder
};

module.exports = {
  monitor,
  user,
};
