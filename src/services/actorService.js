const { actorModel } = require("../models")


const getAllActors = async () => {
    const actors = await actorModel.findAll()
    return { type: null, message: actors}
}

module.exports = {
    getAllActors
}