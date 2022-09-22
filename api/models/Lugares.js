const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
  name: { type: String, require: true, unique: true },
  typePlace : {type: String, require: true},
  daneCity: {type: String, require: true},
  daneDepartment: {type: String, require: true}
});

const Lugares = model("lugares", placeSchema);

module.exports = Lugares;