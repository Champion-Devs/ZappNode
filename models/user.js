const mongoose = require('mongoose');
const {Monitor} = require('./monitor');
const Schema = mongoose.Schema;

const User = new Schema({
    username: { type: String , unique: true },
    password: String,
    googleID: String,
    facebookID: String,
    admin: Boolean,
    superAdmin: Boolean,
    plan: Boolean,
    userCount: Number,
    monitors: [Monitor.schema]
});

module.exports = mongoose.model('User', User);