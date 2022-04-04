const { Schema, model } = require("mongoose");

const hospedajeSchema = new Schema({
  name: { type: String, unique: true, require: true },
  provider: { type: String, require: true },
  origen: { type: String, require: true },
  destination: { type: String, require: true },
  typeRoom: [
    {
      nameRoom: { type: String, require: true },
      highSeason: { type: String, require: true },
      lowSeason: { type: String, require: true },
    }
  ],
  activeDate: { type: String, require: true },
  disableDate: { type: String, require: true },
  description: String,
  activeProduct: {type:Boolean,require:true}
});

const Hospedaje = model("Hospedaje", hospedajeSchema);

module.exports = Hospedaje;
