const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  typePlace : {type: String, required: true},
  daneCity: {type: String, required: true},
  daneDepartment: {type: String, required: true}
});

const Lugares = model("lugares", placeSchema);

module.exports = Lugares;