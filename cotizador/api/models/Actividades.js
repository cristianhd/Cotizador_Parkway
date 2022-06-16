const { Schema, model } = require("mongoose");

const actividadeSchema = new Schema({
  title: { type: String, require: true },
  provider: { type: String, require: true },
  destination: { type: String, require: true },
  price_ta: String,
  price_tb: String,
  description: String,
  activeProduct: { type: Boolean, require: true },
});

const Actividades = model("actividades", actividadeSchema);

module.exports = Actividades;