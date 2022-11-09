const { Schema, model } = require("mongoose");

const trasladoSchema = new Schema({
  title: { type: String, require: true, unique: true },
  originCode: { type: String, require: true },
  originName: { type: String, require: true },
  destinationCode: { type: String, require: true },
  destinationName: { type: String, require: true },
  description: { type: String, require: true },
  rangePeople: { type: String, require: true },
  price: [
    {
      label: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Traslados = model("traslados", trasladoSchema);

module.exports = Traslados;
