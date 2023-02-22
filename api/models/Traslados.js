const { Schema, model } = require("mongoose");

const trasladoSchema = new Schema({
  title: { type: String, required: true, unique: true },
  originName: { type: String, required: true },
  destinationName: { type: Array, required: true },
  description: { type: String, required: true },
  minPeople: { type: String, required: true },
  maxPeople: { type: String, required: true },
  priceAdult: { type: Array, required: true },
  roundTrip: { type: Boolean, required: true },
  providerUser: { type: String, required: true },
});

const Traslados = model("traslados", trasladoSchema);

module.exports = Traslados;
