const { Schema, model } = require("mongoose");

const asistenciaSchema = new Schema({
  title: { type: String, require: true, unique: true },
  destinationName: { type: String, require: true },
  description: { type: String, require: true },
  priceAdult: { type: String, require: true },
  providerUser: { type: String, require: true },
});

const Asistencia = model("asistencia", asistenciaSchema);

module.exports = Asistencia;
