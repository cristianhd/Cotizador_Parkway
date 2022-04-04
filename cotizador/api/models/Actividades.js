const { Schema, model } = require("mongoose");

const actividadeSchema = new Schema({
  provider: { type: String, require: true },
  name: { type: String, require: true },
  destination: { type: String, require: true },
  price: { type: String, require: true },
  description: String,
  activeProduct: {type:Boolean,require:true}
});

const Actividad = model("Hospedajes", actividadeSchema);

module.exports = Actividad;
