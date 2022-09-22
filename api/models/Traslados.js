const { Schema, model } = require("mongoose");

const trasladoSchema = new Schema({
  title: { type: String, require: true, unique: true },
  origin: { type: String, require: true },
  destination: { type: String, require: true },
  description: { type: String, require: true },
  price: [
    {
      type: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Traslados = model("traslados", trasladoSchema);

module.exports = Traslados;
