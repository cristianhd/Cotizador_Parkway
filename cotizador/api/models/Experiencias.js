const { Schema, model } = require("mongoose");

const experienciaSchema = new Schema({
  name: { type: String, unique: true, require: true },
  provider: { type: String, require: true },
  origin: { type: String, require: true },
  destination: { type: String, require: true },
  hotel: { type: String, require: true },
  room: [
    {
      type: { type: String, require: true },
      price: { type: String, require: true },
      rangeAgeKids: String,
    },
  ],
  transport: String,
  activeDate: { type: String, require: true },
  disableDate: { type: String, require: true },
  description: String,
  activeProduct: { type: Boolean, require: true },
});

const Experiencias = model("Experiencias", experienciaSchema);

module.exports = Experiencias;
