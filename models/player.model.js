const mongoose = require('mongoose');

// Definir o esquema para o modelo do jogador
const PlayerSchema = new mongoose.Schema({
  player_id: { type: Number, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model(`Players`, PlayerSchema);