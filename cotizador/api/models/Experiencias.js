const { Schema, model } = require("mongoose");

const experienciaSchema = new Schema({
    title: String,
    destino: String,
    origen: String,
    hotel: String,
    traslado: String,
    price: [
        {
        room: String,
        pesos: String
        }
    ]
})

const Experiencia = model("Experiencia", experienciaSchema)

module.exports = Experiencia;

