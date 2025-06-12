const express = require('express');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(session({
  secret: 'orga_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

mongoose.connect('mongodb://localhost:27017/organizasso')
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error(err));

app.use('/user', userRoutes);
app.use('/message', messageRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Serveur sur port ${PORT}`));
