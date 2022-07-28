const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
  name: { type: String, require: true, unique: true }  
});

const Lugares = model("lugares", placeSchema);

module.exports = Lugares;