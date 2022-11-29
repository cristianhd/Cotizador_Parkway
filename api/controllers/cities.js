const Cities = require("../models/Ciudades");

function suggestCities(req, res) {
  const { name } = req.query;

  if (name === undefined) {
    // cuando no viene ninguna consulta
    res.send({ msg: "no data query" });
  } else {
    const nameCitiesRegex = new RegExp(name, "i");
    try {
      // consulta 5 primeros ciudades
      Cities.find({ nameCity: { $regex: nameCitiesRegex } })
        .limit(5)
        .then((cities) => {
          res.json(cities);
        });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function findAllCities(req, res) {
  try {
    Cities.find().then((cities) => {
      res.send(cities);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function addCities(req, res, next) {
  const cities = req.body;
  let emptyCities = Object.keys(cities).length > 0 ? false : true;

  try {
    // Si viene vacio devolver mensaje no data
    if (emptyCities) {
      res.status(200).send({ msg: "no data" });
    } else {
      // De lo contrario crear la ciudad
      try {
        Cities.create(cities).then((result) => {
          res.json(result);
        });
      } catch (error) {
        res.send(error.message);
      }
    }
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findAllCities,
  addCities,
  suggestCities,
};
