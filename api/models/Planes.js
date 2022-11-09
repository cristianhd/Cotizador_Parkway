const { Schema, model } = require("mongoose");

const planeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  nameAccommodation: { type: String, require: true },
  categoryAccommodation: { type: String, require: true },
  destinationCode: { type: String, require: true },
  destinationName: { type: String, required: true },
  photo: { data: Buffer, contentType: String },
  numberNights: { type: String, require: true },
  description: { type: String, require: true },
  transport: { type: String, require: true },
  rangeKids: { type: String, require: true },
  priceKids: [
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
  activeDate: { type: String, require: true },
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Planes = model("Planes", planeSchema);

module.exports = Planes;
