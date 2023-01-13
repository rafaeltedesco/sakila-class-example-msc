const { customerModel } = require("../models")

const findCustomerById = async (id) => {
    const customer = await customerModel.findCustomerById(id)
    if (!customer) return { type: 'CUSTOMER_NOT_FOUND', message: 'customer id not found'}
    return {
        type: null, message: customer
    }
}

module.exports = {
    findCustomerById
}