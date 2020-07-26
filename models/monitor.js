const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Monitor = new Schema({
    type: { type: String, required: true },
    url: { type: String, required: true },
    name: { type: String, required: true },
    interval: Number,
    userID: Schema.Types.ObjectId
});

module.exports = mongoose.model('Monitor', Monitor);