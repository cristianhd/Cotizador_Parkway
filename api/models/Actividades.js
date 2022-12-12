const { Schema, model } = require("mongoose");

const actividadeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  destinationName: { type: String, require: true },
  description: { type: String, require: true },
  priceKids: { type: Array, required: true },
  priceAdult: { type: Array, required: true },
  maxPeople: { type: String, require: true },
  minPeople: { type: String, require: true },
  activeDate: { type: String, require: true },
  providerUser: { type: String, require: true },
});

const Actividades = model("actividades", actividadeSchema);

module.exports = Actividades;
