const { Schema, model } = require("mongoose");

const asistenciaSchema = new Schema({
  title: { type: String, required: true, unique: true },
  destinationName: { type: String, required: true },
  description: { type: String, required: true },
  priceAdult: { type: Array, required: true },
  providerUser: { type: String, required: true },
});

const Asistencia = model("asistencia", asistenciaSchema);

module.exports = Asistencia;
