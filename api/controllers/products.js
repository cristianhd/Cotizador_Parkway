const Planes = require("../models/Planes");
const Traslados = require("../models/Traslados");
const Actividades = require("../models/Actividades");
const Asistencias = require("../models/Asistencias");
const Places = require("../models/Lugares");

// controller query product

function findExperiencias(req, res, next) {
  const { origin, destination } = req.query;

  try {
    Planes.find({ origin, destination }).then((experiencias) => {
      res.json(experiencias);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findTraslados(req, res, next) {
  const { origin, destination } = req.query;
  try {
    Traslados.find({ origin, destination }).then((traslados) => {
      res.json(traslados);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findActividades(req, res, next) {
  const { destination } = req.query;

  try {
    Actividades.find({ destination }).then((actividades) => {
      res.json(actividades);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function findAsistencias(req, res, next) {
  const { destination } = req.query;

  try {
    Asistencias.find({ destination }).then((asistencias) => {
      res.json(asistencias);
    });
  } catch (error) {
    res.send(error.message);
  }
}

// controller add product

async function addExperiencias(req, res, next) {
  const { experiencias } = req.body;
  const places = await Places.find();

  if (experiencias === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      experiencias.forEach(async (experiencia, index) => {
        const { origin, destination, room } = experiencia;

        if (!places.some((place) => place.name === origin)) {
          places.push({ name: origin });
        }
        if (!places.some((place) => place.name === destination)) {
          places.push({ name: destination });
        }

        room.map((room, index) => room.price.replace("$", "").replace(".", ""));
      });

      Planes.create(experiencias).then((result) => {
        res.json(result);
      });
      await Places.create(places);
    } catch (error) {
      res.send(error.message);
    }
  }
}

async function addTraslados(req, res, next) {
  const { traslados } = req.body;
  const places = await Places.find();

  if (traslados === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      traslados.forEach(async (traslado, index) => {
        const { origin, destination } = traslado;

        if (!places.some((place) => place.name === origin)) {
          places.push({ name: origin });
        }
        if (!places.some((place) => place.name === destination)) {
          places.push({ name: destination });
        }
        traslado.price.replace("$", "").replace(".", "");
      });

      Traslados.create(traslados).then((result) => {
        res.json(result);
      });
      await Places.create(places);
    } catch (error) {
      res.send(error.message);
    }
  }
}

async function addActividades(req, res, next) {
  const { actividades } = req.body;
  const places = await Places.find();

  if (actividades === undefined) {
    res.status(200).send({ msg: "no data" });
  } else {
    try {
      actividades.forEach(async (actividad, index) => {
        const { destination } = actividad;

        if (!places.some((place) => place.name === destination)) {
          places.push({ name: destination });
        }
      });

      Actividades.create(actividades).then((result) => {
        res.json(result);
      });
      await Places.create(places);
    } catch (error) {
      res.send(error.message);
    }
  }
}

async function addAsistencias(req, res, next) {
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
  findExperiencias,
  findTraslados,
  findActividades,
  findAsistencias,
  addExperiencias,
  addTraslados,
  addActividades,
  addAsistencias,
};
