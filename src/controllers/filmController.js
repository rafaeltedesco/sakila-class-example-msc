const { filmService } = require("../services")

const getFilmByFilmId = async (req, res) => {
    const { params: { filmId, customerId }} = req
    const film = await filmService.getFilmByFilmId(filmId, customerId)
    res.status(200).json(film)
  }

  module.exports = {
    getFilmByFilmId
  }