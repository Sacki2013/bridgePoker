const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// Regiter Player
router.post('/register', (req, res, next) => {
  let newPlayer = new Player({
    name: req.body.name,
    gamesPlayed: 1,
    results: req.body.results,
    points: 100
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
    player.name = req.body.name || player.name;
    player.gamesPlayed = req.body.gamesPlayed;
    player.results.push(req.body.results),
    player.points += req.body.points;

    player.save((err, updPlayer) => {
      if(err) throw err;
      res.json(player);
    });
  });
});

module.exports = router;
