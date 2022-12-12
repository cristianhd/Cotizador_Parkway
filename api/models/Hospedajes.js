const { Schema, model } = require("mongoose");

const hospedajeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  categoryAccommodation: { type: String, require: true },
  destinationName: { type: Array, require: true },
  description: { type: String, require: true },
  priceKids: { type: Array },
  priceAdult: { type: Array, require: true },
  highSeassonDate: { type: String, require: true },
  providerUser: { type: String, require: true },
});

const Hospedajes = model("hospedajes", hospedajeSchema);

module.exports = Hospedajes;
