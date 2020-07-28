const mongoose = require('mongoose');
const {Monitor} = require('./monitor');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String, 
    email: String,
    password: String,
    googleID: String,
    facebookID: String,
    admin: Boolean,
    superAdmin: Boolean,
    plan: {
        type: Boolean,
        default: false
    },
    memberCount: Number,
    monitors: [Monitor.schema]
});

module.exports = mongoose.model('User', User);