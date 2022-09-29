const { Schema, model } = require("mongoose");

const ciudadeSchema = new Schema({
  region: { type: String, require: true, unique: true },
  daneDepartament: { type: String, require: true },
  nameDepartment: { type: String, require: true },
  daneCity: { type: String, require: true },
  nameCity: { type: String, require: true },
});

const Ciudades = model("ciudades", ciudadeSchema);

module.exports = Ciudades;