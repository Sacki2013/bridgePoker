const mongoose  = require('mongoose');
const timeStamp = require('mongoose-timestamp');
const config    = require('../config/database');

// Player Schema
const ResultSchema = mongoose.Schema({
  gameNumber: Number,
  place: Number
});

ResultSchema.plugin(timeStamp);

const Result = module.exports = mongoose.model('Result', ResultSchema);
