require('dotenv').config();
const express = require('express');
const { connection } = require('./connection');

const app = express();

app.use(express.json());

app.get('/actors', async (req, res) => {
  const actors = await connection.execute('SELECT * FROM actor');

  res.status(200).json(actors);
});

module.exports = {
  app,
};
