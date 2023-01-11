const { connection } = require('./connection')

const findAll = async () => connection.execute('SELECT * FROM actor');

module.exports = {
    findAll
}