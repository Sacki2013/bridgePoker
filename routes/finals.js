const express = require('express');
const router = express.Router();
const Final = require('../models/final');

// Regiter Final
router.post('/register', (req, res, next) => {
  let newFinal = new Final({
    finalNum: req.body.finalNum,
    finalDate: req.body.finalDate,
    potTotal: 0
  })

  Final.addFinal(newFinal, (err, final) => {
    if(err){
      res.json({
        success: false,
        msg: 'Failed to add player'
      });
    } else {
        res.json({
          success: true,
          msg: 'Success'
        });
    }
  });
});

// Show Finals
router.get('/', (req, res, next) => {
  Final.showFinals((err,finals) => {
    res.json(finals);
  });
});

// Show Final
router.get('/final/:id', (req, res, next) => {
  Final.getFinalById({'_id': req.params.id}, (err, final) => {
    res.json(final)
  });
});

router.put('/final/:id', (req, res, next) => {
  Final.getFinalById({'_id': req.params.id}, (err, final) => {
    final.potTotal += req.body.potTotal;
    final.results.push({
      gameNum: req.body.gameNum,
      amount: req.body.amount
    });

    final.save((err, updPlayer) => {
      if(err) throw err;
      res.json(updPlayer);
    });
  });
});

module.exports = router;
