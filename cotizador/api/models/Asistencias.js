const { Schema, model } = require("mongoose");

const asistenciaSchema = new Schema({
  name: { type: String, require: true, unique: true },
  provider: { type: String, require: true },
  destination: { type: String, require: true },
  price: { type: String, require: true },
  description: String,
  activeProduct: { type: Boolean, require: true },
});

const Asistencia = model("asistencia", asistenciaSchema);

module.exports = Asistencia;