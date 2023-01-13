const { actorModel } = require("../models")


const getAllActors = async (req, res) => {
    const actors = await actorModel.findAll()
    return { type: null, message: actors}
}

module.exports = {
    getAllActors
}