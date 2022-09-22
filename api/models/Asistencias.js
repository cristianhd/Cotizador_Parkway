const { Schema, model } = require("mongoose");

const asistenciaSchema = new Schema({
  title: { type: String, require: true, unique: true },
  destination: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Asistencia = model("asistencia", asistenciaSchema);

module.exports = Asistencia;
