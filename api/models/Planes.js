const { Schema, model } = require("mongoose");

const planeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  nameAccommodation: { type: String, require: true },
  categoryAccommodation: { type: String, require: true },
  destinationName: { type: Array, required: true },
  numberNigths: { type: String, require: true },
  description: { type: String, require: true },
  transport: { type: String, require: true },
  priceKids: { type: Array, required: true },
  priceAdult: { type: Array, required: true },
  activeDate: { type: Array, require: true },
  providerUser: { type: String, require: true },
});

const Planes = model("Planes", planeSchema);

module.exports = Planes;
