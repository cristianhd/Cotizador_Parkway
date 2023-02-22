const Planes = require("../models/Planes");
const Traslados = require("../models/Traslados");
const Actividades = require("../models/Actividades");
const Asistencias = require("../models/Asistencias");
const Hospedajes = require("../models/Hospedajes");

// controller query product

function findPlanes(req, res, next) {
  const { destination, date, id } = req.query;

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

function findPlanesById(req, res) {
  const { id } = req.query;
  try {
    Planes.findById(id).then((plan) => {
      res.json(plan);
    });
  } catch (error) {
    res.send(error.message);
  }
}
function findHospedajes(req, res, next) {
  const { destination, id } = req.query;
  if (id) {
    next();
  } else {
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
}
function findHospedajesById(req, res) {
  const { id } = req.query;
  try {
    Hospedajes.findById(id).then((hospedaje) => {
      res.json(hospedaje);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findTraslados(req, res, next) {
  const { origin, destination, id } = req.query;
  if (id) {
    next();
  } else {
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
}

function findTrasladosById(req, res) {
  const { id } = req.query;
  try {
    Traslados.findById(id).then((traslado) => {
      res.json(traslado);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findActividades(req, res, next) {
  const { destination, date, id } = req.query;
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
}

function findActividadesById(req, res) {
  const { id } = req.query;
  try {
    Actividades.findById(id).then((actividad) => {
      res.json(actividad);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findAsistencias(req, res, next) {
  const { destination, days, pax, id } = req.query;

  if (id) {
    next();
  } else {
    if (destination) {
      try {
        Asistencias.find({ destinationName: destination }).then(
          (asistencias) => {
            const newAsistencias = { asistencias: asistencias, days, pax };
            res.json(newAsistencias);
          }
        );
      } catch (error) {
        res.send(error.message);
      }
    } else {
      // devuelve todas las Asistencias si no hay una query
      Asistencias.find().then((asistencias) => res.json({ asistencias }));
    }
  }
}

function findAsistenciasById(req, res) {
  const { id } = req.query;
  try {
    Asistencias.findById(id).then((asistencia) => {
      res.json(asistencia);
    });
  } catch (error) {
    res.send(error.message);
  }
}

// controller add product

function addManyPlanes(req, res, next) {
  const { planes } = req.body;

  if (Array.isArray(planes)) {
    try {
      Planes.create(planes).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    next();
  }
}

function addPlan(req, res, next) {
  const { planes } = req.body;
  console.log(planes);

  const destinationName = Object.values(planes.destinationName);
  const priceAdult = Object.entries(planes.priceAdult).map((price) => [
    price[0].slice(0, -2),
    price[1],
  ]);
  const priceKids = Object.entries(planes.priceKids).map((price) => price[1]);

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

function addManyHospedajes(req, res, next) {
  const { hospedajes } = req.body;

  if (Array.isArray(hospedajes)) {
    try {
      Hospedajes.create(hospedajes).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    next();
  }
}

function addHospedajes(req, res, next) {
  const { hospedajes } = req.body;

  const priceAdult = Object.entries(hospedajes.priceAdult).map((price) => [
    price[0].slice(0, -2),
    price[1][0],
    price[1][1],
  ]);
  const priceKids = Object.entries(hospedajes.priceKids).map(
    (price) => price[1]
  );

  const newHospedaje = {
    ...hospedajes,
    priceKids,
    priceAdult: priceAdult.filter((price) => price[0] !== undefined),
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

function addManyTraslados(req, res, next) {
  const { traslados } = req.body;

  if (Array.isArray(traslados)) {
    try {
      Traslados.create(traslados).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    next();
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
  const priceAdult = Object.entries(traslados.priceAdult).map(
    (price) => price[1]
  );

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

function addManyActividades(req, res, next) {
  const { actividades } = req.body;

  if (Array.isArray(actividades)) {
    try {
      Actividades.create(actividades).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    next();
  }
}

function addActividades(req, res, next) {
  const { actividades } = req.body;

  const destinationName = Object.values(actividades.destinationName);
  const priceAdult = Object.entries(actividades.priceAdult).map(
    (price) => price[1]
  );
  const priceKids = Object.entries(actividades.priceKids).map(
    (price) => price[1]
  );

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

function addManyAsistencias(req, res, next) {
  const { asistencias } = req.body;

  if (Array.isArray(asistencias)) {
    try {
      Asistencias.create(asistencias).then((result) => {
        res.json(result);
      });
    } catch (error) {
      res.send(error.message);
    }
  } else {
    next();
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

function updatePlanes(req, res, next) {
  const { planes } = req.body;
  console.log(planes);
  if (planes === undefined) {
    res.send("Something wrong with the data (planes)!");
  }

  if (Array.isArray(planes)) {
    next();
  } else {
    const id = planes.id;
    const opts = { new: true };

    try {
      Planes.findByIdAndUpdate({ _id: id }, planes.update, opts, (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        res.send(doc);
      });
    } catch (error) {
      res.sen(error.message);
    }
  }
}

function updateManyPlanes(req, res) {
  const { planes } = req.body;
  const isEmpty = planes.length === 0;

  if (!isEmpty) {
    try {
      planes.map((updatePlan) => {
        console.log(updatePlan.id);
        let includes = {
          food: updatePlan.data.food,
          transport: updatePlan.data.transport,
          visit: updatePlan.data.visit,
          route: updatePlan.data.route,
        };
        return Planes.findByIdAndUpdate(
          updatePlan.id,
          { ...updatePlan.data, includes },
          {
            new: true,
          },
          (err, doc) => {
            console.log(doc);
          }
        );
      });
      res.send(planes);
    } catch (error) {
      res.send(error.message);
    }
  } else {
  }
}

function updateHospedajes(req, res, next) {
  const { hospedajes } = req.body;
  if (hospedajes === undefined) {
    res.send("Something wrong with the data (hospedajes)!");
    return;
  }

  if (Array.isArray(hospedajes)) {
    next();
  } else {
    const id = hospedajes.id;
    const opts = { new: true };

    try {
      Hospedajes.findByIdAndUpdate(
        { _id: id },
        hospedajes.update,
        opts,
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          res.send(doc);
        }
      );
    } catch (error) {
      res.sen(error.message);
    }
  }
}

function updateManyHospedajes(req, res) {
  const { hospedajes } = req.body;
  const isEmpty = hospedajes.length === 0;
  if (!isEmpty) {
    try {
      hospedajes.map((updatePlan) => {
        let includes = {
          food: updatePlan.data.food,
          transport: "",
          visit: "",
          route: "",
        };

        return Hospedajes.findByIdAndUpdate(
          { _id: updatePlan.id },
          { ...updatePlan.data, includes },
          {
            new: true,
          },
          (err, doc) => {
            console.log(doc);
          }
        );
      });
    } catch (error) {
      res.send(error.message);
    }
    res.send(hospedajes);
  } else {
    res.send("the data is empty");
  }
}

function updateTraslados(req, res, next) {
  const { traslados } = req.body;
  if (traslados === undefined) {
    res.send("Something wrong with the data (traslados)!");
    return;
  }

  if (Array.isArray(traslados)) {
    next();
  } else {
    const id = traslados.id;
    const opts = { new: true };

    try {
      Traslados.findByIdAndUpdate(
        { _id: id },
        traslados.update,
        opts,
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          res.send(doc);
        }
      );
    } catch (error) {
      res.sen(error.message);
    }
  }
}

function updateManyTraslados(req, res) {
  const { traslados } = req.body;
  const isEmpty = traslados.length === 0;
  if (!isEmpty) {
    try {
      traslados.map((updatePlan) => {
        return Traslados.findByIdAndUpdate(
          updatePlan._id,
          updatePlan.data,
          {
            new: true,
          },
          (err, doc) => {
            console.log(doc);
          }
        );
      });
    } catch (error) {
      res.send(error.message);
    }
    res.send(traslados);
  } else {
    res.send("the data is empty");
  }
}

function updateActividades(req, res, next) {
  const { actividades } = req.body;
  if (actividades === undefined) {
    res.send("Something wrong with the data (actividades)!");
    return;
  }

  if (Array.isArray(actividades)) {
    next();
  } else {
    const id = actividades.id;
    const opts = { new: true };

    try {
      Actividades.findByIdAndUpdate(
        { _id: id },
        actividades.update,
        opts,
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          res.send(doc);
        }
      );
    } catch (error) {
      res.sen(error.message);
    }
  }
}

function updateManyActividades(req, res) {
  const { actividades } = req.body;
  const isEmpty = actividades.length === 0;
  if (!isEmpty) {
    try {
      actividades.map((updatePlan) => {
        return Actividades.findByIdAndUpdate(
          updatePlan._id,
          updatePlan.data,
          {
            new: true,
          },
          (err, doc) => {
            console.log(doc);
          }
        );
      });
    } catch (error) {
      res.send(error.message);
    }
    res.send(actividades);
  } else {
    res.send("the data is empty");
  }
}

function updateAsistencias(req, res, next) {
  const { asistencias } = req.body;
  if (asistencias === undefined) {
    res.send("Something wrong with the data (asistencias)!");
    return;
  }

  if (Array.isArray(asistencias)) {
    next();
  } else {
    const id = asistencias.id;
    const opts = { new: true };

    try {
      Asistencias.findByIdAndUpdate(
        { _id: id },
        asistencias.update,
        opts,
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          res.send(doc);
        }
      );
    } catch (error) {
      res.sen(error.message);
    }
  }
}

function updateManyAsistencias(req, res) {
  const { asistencias } = req.body;
  const isEmpty = asistencias.length === 0;
  if (!isEmpty) {
    try {
      asistencias.map((updatePlan) => {
        return Asistencias.findByIdAndUpdate(
          updatePlan._id,
          updatePlan.data,
          {
            new: true,
          },
          (err, doc) => {
            console.log(doc);
          }
        );
      });
    } catch (error) {
      res.send(error.message);
    }
    res.send(asistencias);
  } else {
    res.send("the data is empty");
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
  findPlanesById,
  findTraslados,
  findTrasladosById,
  findActividades,
  findActividadesById,
  findAsistencias,
  findAsistenciasById,
  findHospedajes,
  findHospedajesById,
  addPlan,
  addManyPlanes,
  addHospedajes,
  addManyHospedajes,
  addTraslados,
  addManyTraslados,
  addActividades,
  addManyActividades,
  addAsistencias,
  addManyAsistencias,
  updatePlanes,
  updateManyPlanes,
  updateTraslados,
  updateManyTraslados,
  updateHospedajes,
  updateManyHospedajes,
  updateActividades,
  updateManyActividades,
  updateAsistencias,
  updateManyAsistencias,
  deletePlanes,
  deleteHospedajes,
  deleteTraslados,
  deleteActividades,
  deleteAsistencias,
};
