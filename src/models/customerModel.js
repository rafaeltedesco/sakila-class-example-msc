const { connection } = require("./connection")


const findCustomerById = async (id) => {
    const [[result]] = await connection.execute(
        `SELECT * FROM customer WHERE customer_id = ?`, [
            id
        ]
    )
    return result
}

module.exports = {
    findCustomerById
}
