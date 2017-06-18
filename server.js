// Dependencies
const express     = require('express');
const path        = require('path');
const cors        = require('cors');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');

// Files
const config  = require('./config/database');
const players = require('./routes/players');
const player  = require('./models/player');

// Database Setup
mongoose.connect(config.db);
mongoose.connection.on('connected', () => {
  console.log('Connected to DB: ' + config.db);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Initialize App and LocalTunnel
const app = express();
const port = process.env.PORT || 2204;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/players', players);
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
  res.send('Need to send to Angular Frontend');
});

// Start Server
app.listen(port, (err) => {
  if(err) {
    console.log(err);
  }
  console.log('App running at localhost:' + port);
});
