const { Schema, model } = require("mongoose");

const actividadeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  destinationName: { type: String, require: true },
  description: { type: String, require: true },
  maxRangeKids: { type: String },
  minRangeKids: { type: String },
  priceKids: { type: String },
  priceAdult: { type: Array, required: true },
  maxRangePeople: { type: String, require: true },
  minRangePeople: { type: String, require: true },
  activeDate: { type: String, require: true },
  providerUser: { type: String, require: true },
});

const Actividades = model("actividades", actividadeSchema);

module.exports = Actividades;
