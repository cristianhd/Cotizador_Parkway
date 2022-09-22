const { Schema, model } = require("mongoose");

const experienciaSchema = new Schema({
  title: { type: String, require: true, unique: true },
  destination: { type: String, require: true },
  photo: { data: Buffer, contentType: String },
  description: { type: String, require: true },
  transport: { type: String, require: true },
  price: [
    {
      type: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  activeDate: { type: String, require: true },
  providerUser: { type: String, require: true },
  activeProduct: { type: Boolean, require: true },
});

const Experiencias = model("Experiencias", experienciaSchema);

module.exports = Experiencias;
