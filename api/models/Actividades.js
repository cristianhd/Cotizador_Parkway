const { Schema, model } = require("mongoose");

const actividadeSchema = new Schema({
  title: { type: String, require: true, unique: true },
  destination: { type: String, require: true },
  photo: { data: Buffer, contentType: String },
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

const Actividades = model("actividades", actividadeSchema);

module.exports = Actividades;
