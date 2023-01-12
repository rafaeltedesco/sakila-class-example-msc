require('dotenv').config();
const express = require('express');
const { actorModel, filmModel } = require('./models');


const app = express();

app.use(express.json());

app.get('/actors', async (req, res) => {
  const actors = await actorModel.findAll();

  res.status(200).json(actors);
});

app.get('/film/:id', async (req, res) => {
  const { params: { id }} = req
  const film = await filmModel.getFilmByFilmId(id)
  res.status(200).json(film)
})

module.exports = {
  app,
};
