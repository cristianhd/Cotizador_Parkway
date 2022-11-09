const { Schema, model } = require("mongoose");

const actividadeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  destinationCode: { type: String, require: true },
  destinationName: { type: String, require: true },
  photo: { data: Buffer, contentType: String },
  description: { type: String, require: true },
  rangeKids: { type: String, require: true },
  pricekids: [
    {
      label: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  priceAdult: [
    {
      label: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  rangePeople: { type: String, require: true },
  activeDate: { type: String, require: true },
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Actividades = model("actividades", actividadeSchema);

module.exports = Actividades;
