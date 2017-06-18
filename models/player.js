const mongoose  = require('mongoose');
const timeStamp = require('mongoose-timestamp');
const config    = require('../config/database');

const ResultSchema = mongoose.Schema({
  gameNum: Number,
  place: Number
});

// Player Schema
const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gamesPlayed: {
    type: Number,
  },
  results: [ResultSchema],
  points: {
    type: Number
  },
  rebuys: Number,
  addons: Number
});

PlayerSchema.plugin(timeStamp);

const Player = module.exports = mongoose.model('Player', PlayerSchema);

module.exports.getPlayerById = function(id, callback){
  Player.findOne(id, callback);
};

module.exports.showPlayers = function(callback){
  Player.find(callback);
};

module.exports.addPlayer = function(newPlayer, callback, err){
  if(err) throw err;
  newPlayer.save(callback);
};
