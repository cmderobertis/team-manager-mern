const Player = require("../models/player.model")

module.exports = {
  index: (request, response) => {
    response.json({
      message: "Hello World!",
    })
  },
  createPlayer: (request, response) => {
    Player.create({
      ...request.body,
    })
      .then((player) => response.json(player))
      .catch((err) => response.status(400).json(err))
  },
  getAllPlayers: (request, response) => {
    Player.find({}, null, { sort: "name" })
      .then((players) => response.json(players))
      .catch((err) => response.status(400).json(err))
  },
  getPlayer: (request, response) => {
    Player.findOne({ _id: request.params.id })
      .then((player) => response.json(player))
      .catch((err) => response.status(400).json(err))
  },
  updatePlayer: (request, response) => {
    Player.findOneAndUpdate({ _id: request.params.id }, request.body, {
      runValidators: true,
    })
      .then((updatedPlayer) => response.json(updatedPlayer))
      .catch((err) => response.status(400).json(err))
  },
  deletePlayer: (request, response) => {
    Player.deleteOne({ _id: request.params.id })
      .then((deleteConfirmation) => response.json(deleteConfirmation))
      .catch((err) => response.status(400).json(err))
  },
}
