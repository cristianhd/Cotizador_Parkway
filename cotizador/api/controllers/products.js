const Experiencia = require("../models/Experiencias");

function findExperiencias(req, res, next) {
  const typeProduct = req.params.type;

  if (typeProduct !== "Experiencias") {
    console.log(req.params.type);
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
    const typeProduct = req.params.type;
  
    if (typeProduct !== "Hospedaje") {
      console.log(req.params.type);
    }
  
    try {
      Hospedaje.find().then((Experiencias) => {
        res.json(Experiencias);
      });
    } catch (error) {
      res.send(error.message);
    }
  }

module.exports = {
  findExperiencias,
};
