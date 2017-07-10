const mongoose  = require('mongoose');
const timeStamp = require('mongoose-timestamp');
const config    = require('../config/database');

const ResultSchema = mongoose.Schema({
  gameNum: Number,
  amount: Number
});

// Final Schema
const FinalSchema = mongoose.Schema({
  finalNum: Number,
  finalDate: String, 
  potTotal: Number,
  results: [ResultSchema]
});

FinalSchema.plugin(timeStamp);

const Final = module.exports = mongoose.model('Final', FinalSchema);

module.exports.getFinalById = function(id, callback){
  Final.findOne(id, callback);
};

module.exports.showFinals = function(callback){
  Final.find(callback);
};

module.exports.addFinal = function(newFinal, callback, err){
  if(err) throw err;
  newFinal.save(callback);
};

