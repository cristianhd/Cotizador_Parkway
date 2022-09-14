const { Schema, model } = require("mongoose");

const hospedajeSchema = new Schema({
  title: { type: String, require: true },
  destination: { type: String, require: true },
  photo: { data: Buffer, contentType: String },
  description: String,
  room: [
    {
      type: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  activeDate: [{ type: String, require: true }],
  disableDate: [{ type: String, require: true }],
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Hospedajes = model("hospedajes", hospedajeSchema);

module.exports = Hospedajes;
