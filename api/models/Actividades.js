const { Schema, model } = require("mongoose");

const actividadeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  destinationName: { type: Array, required: true },
  photos: { type: Array, required: true },
  description: { type: String, required: true },
  priceKids: { type: Array, required: true },
  priceAdult: { type: Array, required: true },
  maxPeople: { type: String, required: true },
  minPeople: { type: String, required: true },
  activeDate: { type: Array, required: true },
  providerUser: { type: String, required: true },
});

const Actividades = model("actividades", actividadeSchema);

module.exports = Actividades;
