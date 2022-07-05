const { Schema, model } = require("mongoose");

const trasladoSchema = new Schema({
  provider: { type: String, require: true },
  origin: { type: String, require: true },
  destination: { type: String, require: true },
  price: { type: String, require: true },
  description: String,
  activeProduct: { type: Boolean, require: true },
});

const Traslados = model("traslados", trasladoSchema);

module.exports = Traslados;
