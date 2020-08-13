const mongoose = require('mongoose');
const { Monitor } = require('./monitor');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: String,
  password: String,
  googleID: String,
  facebookID: String,
  role: {
    type: String,
    default: 'user',
    enum: ['admin', 'superAdmin', 'user'],
  },
  plan: String,
  members: Array,
  monitors: [Monitor.schema],
});

User.pre('save', async function () {
  const hashedPass = await bcrypt.hash(this.password, 12);
  this.password = hashedPass;
});

module.exports = mongoose.model('User', User);
