const { Schema, model } = require("mongoose");

const experienciaSchema = new Schema({
  name: { type: String, unique: true, require: true },
  provider: { type: String, require: true },
  origen: { type: String, require: true },
  destination: { type: String, require: true },
  hotel: { type: String, require: true },
  typeRoom: [
    {
      nameRoom: { type: String, require: true },
      price: { type: String, require: true },
    }
  ],
  transport: String,
  activeDate: { type: String, require: true },
  disableDate: { type: String, require: true },
  description: String,
  activeProduct: {type:Boolean,require:true}
});

const Experiencia = model("Experiencias", experienciaSchema);

module.exports = Experiencia;
