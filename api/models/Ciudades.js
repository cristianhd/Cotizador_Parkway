const { Schema, model } = require("mongoose");

const ciudadeSchema = new Schema({
  region: { type: String, required: true },
  daneDepartament: { type: String, required: true },
  nameDepartment: { type: String, required: true },
  daneCity: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
});

const Ciudades = model("ciudades", ciudadeSchema);

module.exports = Ciudades;
