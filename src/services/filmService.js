const { customerHelper } = require('../helpers');
const { filmModel, customerModel } = require('../models');

const getFilmByFilmId = async (filmId, customerId) => {
  /* Apenas clientes cadastrados podem visualizar */
  const customer = await customerModel.findCustomerById(customerId);
  if (!customer)
    return { type: 'CUSTOMER_NOT_FOUND', message: 'customer id not found' };
  /* Apenas clientes ativos podem visualizar filmes por ID */
  const isCustomerActive = customerHelper.isCustomerActive(customer)
  if (!isCustomerActive) return {type: 'CUSTOMER_NOT_ACTIVE', message: 'customer not active'}

  const film = await filmModel.getFilmByFilmId(filmId);
  return { type: null, message: film}
};

module.exports = {
    getFilmByFilmId
}
