const Experiencia = require("../models/Experiencias");
const Hospedaje = require("../models/Hospedajes");

function findExperiencias(req, res, next) {
  const typeProduct = req.params.type.toLowerCase();

  if (typeProduct !== "Experiencias") {
    next();
  }

  try {
    Experiencia.find().then((Experiencias) => {
      res.json(Experiencias);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findHospedaje(req, res, next) {
  const typeProduct = req.params.type.toLowerCase();

  if (typeProduct !== "hospedaje") {
    console.log(req.params.type);
  }

  try {
    Hospedaje.find().then((Hospedaje) => {
      res.json(Hospedaje);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function postExperiencia(req, res, next) {
  const typeProduct = req.params.type.toLowerCase();

  if (typeProduct !== "experiencias") {
    next();
  }
  console.log(req.body);
  console.log(typeProduct);
  const experiencias = req.body;

  try {
    Experiencia.insertMany(experiencias).then((result) => {
      res.json(result);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function postHospedajes(req, res, next) {
  const typeProduct = req.params.type.toLowerCase();

  if (typeProduct !== "hospedajes") {
    console.log(req.params.type);
  }
  console.log(req.body);
  console.log(typeProduct);
  const hospedajes = req.body;

  try {
    Hospedaje.insertMany(hospedajes).then( async (result) => {
      await res.json(result);
    });
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findExperiencias,
  findHospedaje,
  postExperiencia,
  postHospedajes,
};
