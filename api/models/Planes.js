const { Schema, model } = require("mongoose");
const Includes = require("./Includes");

const planeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  nameAccommodation: { type: String, required: true },
  categoryAccommodation: { type: String, required: true },
  destinationName: { type: Array, required: true },
  photos: { type: Array, required: true },
  numberNigths: { type: String, required: true },
  description: { type: String, required: true },
  includes: Includes,
  transport: { type: String, required: true },
  priceKids: { type: Array, required: true },
  priceAdult: { type: Array, required: true },
  activeDate: { type: Array, required: true },
  providerUser: { type: String, required: true },
});

const Planes = model("Planes", planeSchema);

module.exports = Planes;
