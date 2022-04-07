const Experiencias = require("../models/Experiencias");
const Hospedajes = require("../models/Hospedajes");
const Traslados = require("../models/Traslados");
const Actividades = require("../models/Actividades");
const Asistencias = require("../models/Asistencias");

function findExperiencias(req, res, next) {
  const {
    origin,
    destination
  } = req.query
  console.log(origin,destination);

  try {
    Experiencias.find({origin,destination}).then((experiencias) => {
      console.log(experiencias)
      res.json(experiencias);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findHospedaje(req, res, next) {
  const {
    destination
  } = req.query
  console.log(destination);
  
  try {
    Hospedajes.find({destination}).then((hospedajes) => {
      res.json(hospedajes);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findTraslados(req, res, next) {
  const {
    origin,
    destination
  } = req.query
  try {
    Traslados.find({origin,destination}).then((traslados) => {
      res.json(traslados);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findActividades(req, res, next) {
  const {
    destination
  } = req.query

  try {
    Actividades.find({destination}).then((actividades) => {
      res.json(actividades);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findAsistencias(req, res, next) {
  const {
    destination
  } = req.query

  try {
    Asistencias.find({destination}).then((asistencias) => {
      res.json(asistencias);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function addExperiencias(req, res, next) {
  const { experiencias } = req.body;
  if (experiencias === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Experiencias.insertMany(experiencias).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function addHospedajes(req, res, next) {
  const { hospedajes } = req.body;
  if (hospedajes === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Hospedajes.insertMany(hospedajes).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function addTraslados(req, res, next) {
  const { traslados } = req.body;

  if (traslados === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Traslados.insertMany(traslados).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function addActividades(req, res, next) {
  const { actividades } = req.body;
  if (actividades === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Actividades.insertMany(actividades).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function addAsistencias(req, res, next) {
  const { asistencias } = req.body;
  if (asistencias === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Asistencias.insertMany(asistencias).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}
module.exports = {
  findExperiencias,
  findHospedaje,
  findTraslados,
  findActividades,
  findAsistencias,
  addExperiencias,
  addHospedajes,
  addTraslados,
  addActividades,
  addAsistencias,
};
