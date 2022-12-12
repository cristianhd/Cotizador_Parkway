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
    Hospedajes.find().then((planes) => res.json(planes));
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

  // const destinationName = Object.entries(planes.destination);
  // const priceAdult = Object.entries(planes.priceAdult);

  // const newPlan = {
  //   ...planes,
  //   destinationName: destinationName,
  //   priceAdult: priceAdult,
  // };

  // console.log(newPlan);

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
  const destinations = Object.values(traslados.destinationName).map(
    (destination) => "-" + destination
  );
  const title =
    traslados.originName + destinations.toString().replace(/,/g, "");

  const newTraslados = {
    ...traslados,
    title,
  };

  if (traslados === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Traslados.create(newTraslados).then((result) => {
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

// controller update product

function updatePlanes(req, res) {
  const { _id, update } = req.body;

  const opts = { new: true };

  try {
    Planes.findByIdAndUpdate(_id, update, opts, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function updateHospedajes(req, res) {
  const { _id, update } = req.body;

  const opts = { new: true };

  try {
    Hospedajes.findByIdAndUpdate(_id, update, opts, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function updateTraslados(req, res) {
  const { _id, update } = req.body;

  const opts = { new: true };

  try {
    Traslados.findByIdAndUpdate(_id, update, opts, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function updateActividades(req, res) {
  const { _id, update } = req.body;

  const opts = { new: true };

  try {
    Actividades.findByIdAndUpdate(_id, update, opts, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function updateAsistencias(req, res) {
  const { _id, update } = req.body;

  const opts = { new: true };

  try {
    Asistencias.findByIdAndUpdate(_id, update, opts, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function deletePlanes(req, res) {
  const { _id } = req.body;
  try {
    Planes.findByIdAndRemove(_id, (err, doc) => {
      if (err) {
        console.log("Something wrong when delete data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function deleteHospedajes(req, res) {
  const { _id } = req.body;
  try {
    Hospedajes.findByIdAndRemove(_id, (err, doc) => {
      if (err) {
        console.log("Something wrong when delete data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function deleteTraslados(req, res) {
  const { _id } = req.body;
  try {
    Traslados.findByIdAndRemove(_id, (err, doc) => {
      if (err) {
        console.log("Something wrong when delete data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function deleteAsistencias(req, res) {
  const { _id } = req.body;
  try {
    Asistencias.findByIdAndRemove(_id, (err, doc) => {
      if (err) {
        console.log("Something wrong when delete data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
  }
}

function deleteActividades(req, res) {
  const { _id } = req.body;
  try {
    Actividades.findByIdAndRemove(_id, (err, doc) => {
      if (err) {
        console.log("Something wrong when delete data!");
      }
      res.send(doc);
    });
  } catch (error) {
    res.sen(error.message);
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
  updatePlanes,
  updateTraslados,
  updateHospedajes,
  updateActividades,
  updateAsistencias,
  deletePlanes,
  deleteHospedajes,
  deleteTraslados,
  deleteActividades,
  deleteAsistencias,
};
