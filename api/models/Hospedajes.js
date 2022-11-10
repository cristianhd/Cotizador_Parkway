const { Schema, model } = require("mongoose");

const hospedajeSchema = new Schema({
  nameAccommodation: { type: String, require: true, unique: true },
  categoryAccommodation: { type: String, require: true },
  destinationCode: { type: String, require: true },
  destinationName: { type: String, require: true },
  photo: { data: Buffer, contentType: String },
  description: { type: String, require: true },
  rangeKids: { type: String, require: true },
  priceKids: [
    {
      label: { type: String, require: true },
      priceOff: { type: String, require: true },
      priceHigh: { type: String, require: true },
    },
  ],
  priceAdult: [
    {
      label: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  highSeassonDate: { type: String, require: true },
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Hospedajes = model("hospedajes", hospedajeSchema);

module.exports = Hospedajes;
