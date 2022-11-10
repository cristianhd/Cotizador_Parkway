const Planes = require("../models/Planes");
const Traslados = require("../models/Traslados");
const Actividades = require("../models/Actividades");
const Asistencias = require("../models/Asistencias");
const Hospedajes = require("../models/Hospedajes");

// controller query product

function findPlanes(req, res) {
  const { destination } = req.query;
  let lengthOfQuery = Object.keys(req.query).length;

  if (lengthOfQuery !== 0) {
    try {
      Planes.find({ destination }).then((planes) => {
        res.json(planes);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    // devuelve todos los Planes si no hay una query
    Planes.find().then((planes) => res.json(planes));
  }
}

function findHospedajes(req, res) {
  const { destination } = req.query;
  let lengthOfQuery = Object.keys(req.query).length;

  if (lengthOfQuery !== 0) {
    try {
      Hospedajes.find({ destination }).then((planes) => {
        res.json(planes);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    // devuelve todos los Planes si no hay una query
    Planes.find().then((planes) => res.json(planes));
  }
}

function findTraslados(req, res, next) {
  const { origin, destination } = req.query;
  let lengthOfQuery = Object.keys(req.query).length;

  if (lengthOfQuery !== 0) {
    try {
      Traslados.find({ origin, destination }).then((traslados) => {
        res.json(traslados);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    // devuelve todos los Traslados si no hay una query
    Traslados.find().then((traslados) => res.json(traslados));
  }
}

function findActividades(req, res, next) {
  const { destination } = req.query;
  let lengthOfQuery = Object.keys(req.query).length;

  if (lengthOfQuery !== 0) {
    try {
      Actividades.find({ destination }).then((actividades) => {
        res.json(actividades);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    // devuelve todas las Actividades si no hay una query
    Actividades.find().then((actividades) => res.json(actividades));
  }
}

function findAsistencias(req, res, next) {
  const { destination } = req.query;
  let lengthOfQuery = Object.keys(req.query).length;

  // devuelve todas las Asistencias si no hay una query
  if (lengthOfQuery === 0) {
    try {
      Asistencias.find({ destination }).then((asistencias) => {
        res.json(asistencias);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    Asistencias.find().then((asistencias) => res.json(asistencias));
  }
}

// controller add product

function addPlanes(req, res, next) {
  const { planes } = req.body;

  if (planes === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Planes.create(planes).then((result) => {
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
      Hospedajes.create(hospedajes).then((result) => {
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
      Traslados.create(traslados).then((result) => {
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
      Actividades.create(actividades).then((result) => {
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
      Asistencias.create(asistencias).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}
module.exports = {
  findPlanes,
  findTraslados,
  findActividades,
  findAsistencias,
  findHospedajes,
  addPlanes,
  addHospedajes,
  addTraslados,
  addActividades,
  addAsistencias,
};
