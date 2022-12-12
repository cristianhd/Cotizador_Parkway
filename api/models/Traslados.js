const { Schema, model } = require("mongoose");

const trasladoSchema = new Schema({
  title: { type: String, require: true, unique: true },
  originName: { type: String, require: true },
  destinationName: { type: Array, require: true },
  description: { type: String, require: true },
  minPeople: { type: String, require: true },
  maxPeople: { type: String, require: true },
  priceAdult: { type: String, require: true },
  rountrip: { type: Boolean, require: true },
  providerUser: { type: String, require: true },
});

const Traslados = model("traslados", trasladoSchema);

module.exports = Traslados;
