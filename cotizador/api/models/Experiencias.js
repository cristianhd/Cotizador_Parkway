const { Schema, model } = require("mongoose");

const experienciaSchema = new Schema({
  title: { type: String, require: true },
  photo: { data: Buffer, contentType: String },
  provider: { type: String, require: true },
  description: String,
  origin: { type: String, require: true },
  destination: { type: String, require: true },
  transport: String,
  room: [
    {
      type: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  activeDate: [{ type: String, require: true }],
  disableDate: [{ type: String, require: true }],
  activeProduct: { type: Boolean, require: true },
});

const Experiencias = model("Experiencias", experienciaSchema);

module.exports = Experiencias;
