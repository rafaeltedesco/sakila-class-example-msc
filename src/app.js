require('dotenv').config();
const express = require('express');
const { actorModel, filmModel, customerModel } = require('./models');
const { filmService } = require('./services');



const app = express();

app.use(express.json());

app.get('/actors', async (req, res) => {
  const actors = await actorModel.findAll();

  res.status(200).json(actors);
});

app.get('/film/:id', async (req, res) => {
  const { params: { id }} = req
  const { headers: {customerid: customerId}} = req
  const film = await filmService.getFilmByFilmId(id, customerId)
  res.status(200).json(film)
})

app.get('/customer/:id', async (req, res) => {
  const { params: { id }} = req
  const customer = await customerModel.findCustomerById(id)
  res.status(200).json(customer)
})

module.exports = {
  app,
};
