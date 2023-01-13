require('dotenv').config();
const express = require('express');
const { filmService, actorService, customerService } = require('./services');



const app = express();

app.use(express.json());

app.get('/actors', async (req, res) => {
  const actors = await actorService.getAllActors()
  res.status(200).json(actors);
});

app.get('/film/:filmId/customer/:customerId', async (req, res) => {
  const { params: { filmId, customerId }} = req
  const film = await filmService.getFilmByFilmId(filmId, customerId)
  res.status(200).json(film)
})

app.get('/customer/:id', async (req, res) => {
  const { params: { id }} = req
  const customer = await customerService.findCustomerById(id)
  res.status(200).json(customer)
})

module.exports = {
  app,
};
