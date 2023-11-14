const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Fruit = require('./models/fruit.js');

app.get('/', async (req, res) => {
  res.render('index.ejs');
});

app.get('/fruits/new', (req, res) => {
  res.render('fruits/new.ejs');
});

app.listen(3000, () => {
  console.log('The express app is ready!');
});
