const User = require('../models/user');
const { HTTPMonitor, PingMonitor, KeywordMonitor, PortMonitor, Monitor } = require('../models/monitor');

const bcrypt = require('bcrypt');

//use these for operations related to user monitor subscriptions
const monitor = {
  create: async (req, res) => {
    try {
      const { type, monitor, user_id } = req.body;
      let p;
      switch (type) {
        case 'HTTPMonitor':
          p = new HTTPMonitor(monitor);
          break;

        case 'PingMonitor':
          p = new PingMonitor(monitor);
          break;

        case 'KeywordMonitor':
          p = new KeywordMonitor(monitor);
          break;

        case 'PortMonitor':
          p = new PortMonitor(monitor);
          break;

        default:
          p = new Monitor(monitor);
          break;
      }
      User.findByIdAndUpdate({ _id: user_id }, { $push: { monitors: p } }).exec((err, success) => {
        if (err) throw err;
        res.json(success);
      });
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
      const { user_id, monitor_id, monitor } = req.body;
      User.findOneAndUpdate(
        { _id: user_id, monitors: { _id: monitor_id } },
        {
          $set: { 'monitors.$': monitor },
        },
      ).exec((err, success) => {
        if (err) throw err;
        res.json(success);
      });
    } catch (err) {
      throw err;
    }
  },

  delete: async (req, res) => {
    try {
      const { user_id, monitor_id } = req.body;
      User.findOneAndUpdate({ _id: user_id }, { $pull: { monitors: { _id: monitor_id } } }).exec((err, success) => {
        if (err) throw err;
        res.json(success);
      });
    } catch (err) {
      throw err;
    }
  },
};

//use these for members subscribed to a user and their monitors
const member = {
  create: async (req, res) => {
    try {
      const { user_id, member_id } = req.body;
      User.findByIdAndUpdate({ _id: user_id }, { $push: { members: member_id } }).exec((err, success) => {
        if (err) throw err;
        res.send(success);
      });
    } catch (err) {
      throw err;
    }
  },

  read: async (req, res) => {
    //returns the member's user object from it's id
    try {
      const { member_id } = req.body;
      User.findById({ _id: member_id }).exec((err, success) => {
        if (err) throw err;
        res.send(success);
      });
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

  delete: async (req, res) => {
    //deletes a memeber, takes a parent user id and the member's id
    try {
      const { user_id, member_id } = req.body;
      User.findByIdAndUpdate({ _id: user_id }, { $pull: { members: member_id } }).execPopulate((err, success) => {
        if (err) throw err;
        res.json(success);
      });
    } catch (err) {
      throw err;
    }
  },
};

//use these for operations related to more "static" user information
const user = {
  create: async (req, res) => {
    try {
      res.json({ message: 'not yet implemented' });
    } catch (err) {
      throw err;
    }
  }, //this is currently taken care of by /signup

  read: async (req, res) => {
    //reads a user or the user list, takes an optional user_id
    try {
      //if a user id was submitted, find the user by the id
      if (req.body.user_id) {
        User.findById({ _id: user_id }).exec((err, success) => {
          if (err) throw err;
          res.json(success);
        });
      } else {
        //if no user id was submitted, return all users
        User.find().exec((err, success) => {
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
        message: 'profil updated successfully',
      });
    } catch (err) {
      res.status(200).json({
        status: 'fail',
        message: err,
      });
    }
  },

  delete: async (req, res) => {
    //deletes a user by the provided id
    try {
      User.findOneAndDelete({ _id: req.user._id }, (err) => {
        if (err) throw err;
        res.redirect('auth/logout');
      });
    } catch (error) {
      throw err;
    }
  },
};

module.exports = {
  monitor,
  user,
  member,
};
