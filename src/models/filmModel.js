const { connection } = require('./connection');

const getFilmByFilmId = async (id) => {
  const [[result]] = await connection.execute(
    `SELECT * FROM film WHERE film_id = ?`,
    [id]
  );
  return result;
};

module.exports = {
  getFilmByFilmId,
};
