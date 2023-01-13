require('dotenv').config();
const express = require('express');
const { actorModel, customerModel } = require('./models');
const { filmController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/actors', async (req, res) => {
  const actors = await actorModel.findAll();

  res.status(200).json(actors);
});

app.get('/film/:filmId/customer/:customerId', filmController.getFilmByFilmId)

app.get('/customer/:id', async (req, res) => {
  const { params: { id }} = req
  const customer = await customerModel.findCustomerById(id)
  res.status(200).json(customer)
})

module.exports = {
  app,
};
