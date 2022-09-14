const { Schema, model } = require("mongoose");

const citiesSchema = new Schema({
  city: { type: String, require: true, unique: true },
  departament : {type: String, require: true},
  country: {type: String, require: true}
});

const Ciudades = model("ciudades", citiesSchema);

module.exports = Ciudades;