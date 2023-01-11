require('dotenv').config();
const express = require('express');
const { actorModel } = require('./models')

const app = express();

app.use(express.json());

app.get('/actors', async (req, res) => {
  const actors = await actorModel.findAll();

  res.status(200).json(actors);
});

module.exports = {
  app,
};
