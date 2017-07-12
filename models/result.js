const mongoose  = require('mongoose');
const timeStamp = require('mongoose-timestamp');
const config    = require('../config/database');

// Result Schema
const ResultSchema = mongoose.Schema({
  gameNum: Number,
  place: Number
});

ResultSchema.plugin(timeStamp);

const Result = module.exports = mongoose.model('Result', ResultSchema);
