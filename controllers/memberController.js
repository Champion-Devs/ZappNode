const User = require('../models/user');

const monitor = {
  create: async (req, res) => {
    try {
      res.json({ message: 'not yet implemented' });
    } catch (err) {
      throw err;
    }
  },

  read: async (req, res) => {
    //reads a monitor or the monitor list, takes an optional monitor id
    try {
      const { user_id, monitor_id } = req.body;
      //if no specific monitor was requested from the user, send them all
      if (!monitor_id) {
        User.find({ _id: user_id }).exec((err, success) => {
          if (err) throw err;
          res.json(success.monitors);
        });
      } else {
        //otherwise, send the specific monitor
        User.find({ _id: user_id, monitors: { _id: monitor_id } }).exec((err, success) => {
          if (err) throw err;
          res.json(success);
        });
      }
    } catch (err) {
      throw err;
    }
  },

  update: async (req, res) => {
    try {
      res.json({ message: 'not yet implemented' });
    } catch (err) {
      throw err;
    }
  },
};
module.exports = { monitor };
