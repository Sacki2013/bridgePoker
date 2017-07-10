const express = require('express');
const router = express.Router();
const Player = require('../models/player');
const Result = require('../models/result');

// Regiter Player
router.post('/register', (req, res, next) => {
  let newPlayer = new Player({
    name: req.body.name,
    gamesPlayed: 0,
    points: 0,
    rebuys: 0,
    addons: 0,
    totalSpend: 0,
    totalWinnings: 0
  })

  Player.addPlayer(newPlayer, (err, player) => {
    if(err){
      res.json({
        success: false,
        msg: 'Failed to add player'
      });
    } else {
        res.json({
          success: true,
          msg: 'Player ' + newPlayer.name + ' created'
        });
    }
  });
});

// Show Players
router.get('/', (req, res, next) => {
  Player.showPlayers((err, players) => {
    res.json(players);
  });
});

// Show Player
router.get('/player/:id', (req, res, next) => {
  Player.getPlayerById({'_id': req.params.id}, (err, player) => {
    res.json(player)
  });
});

// Add Results
router.put('/player/:id', (req, res, next) => {
  Player.getPlayerById({'_id': req.params.id}, (err, player) => {
    player.results.push({
      gameNum: req.body.gameNum,
      place: req.body.place
    });
    player.gamesPlayed += 1;
    player.points += req.body.points;
    player.rebuys += req.body.rebuys;
    player.addons += req.body.addons;
    player.totalSpend += req.body.totalSpend;
    player.totalWinnings += req.body.totalWinnings;

    player.save((err, updPlayer) => {
      if(err) throw err;
      res.json(updPlayer);
    });
  });
});

module.exports = router;
