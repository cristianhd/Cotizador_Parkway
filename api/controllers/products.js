const Planes = require("../models/Planes");
const Traslados = require("../models/Traslados");
const Actividades = require("../models/Actividades");
const Asistencias = require("../models/Asistencias");
const Hospedajes = require("../models/Hospedajes");

// controller query product

function findPlanes(req, res, next) {
  const { destination, date, id } = req.query;
  console.log(id);
  if (id) {
    next();
  } else {
    if (destination && date) {
      try {
        let activeDate = date.split(" - ");
        let regex = new RegExp("^0+(?!$)", "g");
        let monthsActiveDate = activeDate.map((date) =>
          date.slice(3, 5).replace(regex, "")
        );
        monthsActiveDate.push("0");

        Planes.find({
          destinationName: { $in: [destination] },
          activeDate: { $in: monthsActiveDate },
        }).then((planes) => {
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
}

function findById(req, res) {
  const { id } = req.query;
  try {
    Planes.findById(id).then((plan) => {
      res.json(plan);
    });
  } catch (error) {
    res.send(error.message);
  }
}
function findHospedajes(req, res) {
  const { destination } = req.query;

  if (destination) {
    try {
      Hospedajes.find({ destinationName: destination }).then((planes) => {
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

  if (origin && destination) {
    try {
      Traslados.find({
        originName: origin,
        destinationName: { $in: [destination] },
      }).then((traslados) => {
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
  const { destination, date } = req.query;

  if (destination && date) {
    try {
      let activeDate = date.split(" - ");
      let regex = new RegExp("^0+(?!$)", "g");
      let monthsActiveDate = activeDate.map((date) =>
        date.slice(3, 5).replace(regex, "")
      );
      Actividades.find({
        destinationName: { $in: [destination] },
        activeDate: { $in: monthsActiveDate },
      }).then((actividades) => {
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

  if (destination) {
    try {
      Asistencias.find({ destinationName: destination }).then((asistencias) => {
        res.json(asistencias);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    // devuelve todas las Asistencias si no hay una query
    Asistencias.find().then((asistencias) => res.json(asistencias));
  }
}

// controller add product

function addPlanes(req, res, next) {
  const { planes } = req.body;

  const destinationName = Object.values(planes.destinationName);
  const priceAdult = Object.entries(planes.priceAdult);
  const priceKids = Object.entries(planes.priceKids);

  const newPlan = {
    ...planes,
    destinationName,
    priceKids,
    priceAdult: priceAdult.filter((price) => price[1] !== undefined),
  };

  if (planes === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Planes.create(newPlan).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function addHospedajes(req, res, next) {
  const { hospedajes } = req.body;

  const priceAdult = Object.entries(hospedajes.priceAdult);
  const priceKids = Object.entries(hospedajes.priceKids);

  const newHospedaje = {
    ...hospedajes,
    priceKids,
    priceAdult: priceAdult.filter((price) => price[1] !== undefined),
  };

  if (hospedajes === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Hospedajes.create(newHospedaje).then((result) => {
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
  const destinationName = Object.values(traslados.destinationName);
  const priceAdult = Object.entries(traslados.priceAdult);

  const newTraslados = {
    ...traslados,
    title,
    destinationName,
    priceAdult: priceAdult.filter((price) => price[1] !== undefined),
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

  const destinationName = Object.values(actividades.destinationName);
  const priceAdult = Object.entries(actividades.priceAdult);
  const priceKids = Object.entries(actividades.priceKids);

  const newHospedaje = {
    ...actividades,
    destinationName,
    priceKids,
    priceAdult: priceAdult.filter((price) => price[1] !== undefined),
  };

  if (actividades === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      Actividades.create(newHospedaje).then((result) => {
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
  const { data } = req.body;
  const id = data.id;
  const destinationName = Object.values(data.update.destinationName);
  const priceAdult = Object.entries(data.update.priceAdult);
  const priceKids = Object.entries(data.update.priceKids);

  const updatePlan = {
    ...data.update,
    destinationName,
    priceKids,
    priceAdult: priceAdult.filter((price) => price[1] !== undefined),
  };

  const opts = { new: true };

  try {
    Planes.findByIdAndUpdate({ _id: id }, updatePlan, opts, (err, doc) => {
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
  const { id } = req.body;

  try {
    Planes.findByIdAndRemove({ _id: id }, (err, doc) => {
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
  const { id } = req.body;
  try {
    Hospedajes.findByIdAndRemove({ _id: id }, (err, doc) => {
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
  const { id } = req.body;
  try {
    Traslados.findByIdAndRemove({ _id: id }, (err, doc) => {
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
  const { id } = req.body;
  try {
    Asistencias.findByIdAndRemove({ _id: id }, (err, doc) => {
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
  const { id } = req.body;
  try {
    Actividades.findByIdAndRemove({ _id: id }, (err, doc) => {
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
  findById,
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
