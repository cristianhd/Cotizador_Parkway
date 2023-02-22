const { Schema, model } = require("mongoose");
const Includes = require("./Includes");

const hospedajeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  categoryAccommodation: { type: String, required: true },
  destinationName: { type: String, required: true },
  photos: { type: Array, required: true },
  description: { type: String, required: true },
  includes: Includes,
  priceKids: { type: Array },
  priceAdult: { type: Array, required: true },
  highSeassonDate: { type: String, required: true },
  providerUser: { type: String, required: true },
});

const Hospedajes = model("hospedajes", hospedajeSchema);

module.exports = Hospedajes;
