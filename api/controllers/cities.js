const Cities = require("../models/Ciudades");

function suggestCities(req, res) {
  const { name } = req.query;

  if (name === undefined) {
    // cuando no viene ninguna consulta
    res.send({ msg: "no data query" });
  } else {
    const nameCitiesRegex = ".*" + name.toLowerCase() + ".*";
    try {
      // consulta 5 primeros ciudades
      Cities.find({ name: { $regex: nameCitiesRegex } })
        .limit(5)
        .then((cities) => {
          res.json(cities);
        });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function findAllCities(res, req) {
  try {
    Cities.find().then((cities) => {
      res.send(cities);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function addCity(req, res, next) {
  const city = req.body;
  const emptyCity = Object.entries(city).length === 0;

  try {
    // caso en el que viene multiples ciudades en un array -> next()
    if (Array.isArray(city)) {
      next();
    } else {
      //caso en el que no hay datos
      if (emptyCity) res.send({ msg: "no data" });
      // transforma todos los valores en minuscula
      for (const property in city) {
        city[property] = city[property].toLowerCase();
      }
      Cities.exists({ name: city.name }, function (err, doc) {
        // si la ciudad no existe se crea
        if (doc === null) {
          Cities.create(city).then((result) => {
            console.log(result);
            res.json(result);
          });
        } else {
          // si la ciudad existe envio msg al cliente
          res.send({ msg: "ya existe el ciudad" });
        }
        if (err) console.log(err);
      });
    }
  } catch (error) {
    res.send(error.message);
  }
}

async function addManyCities(req, res) {
  const cities = req.body;

  try {
    var namePlaces = await Promise.all(
      cities.map(async (city) => {
        var exist = await Cities.exists({ name: city.name });

        // transforma todos los valores en minuscula
        for (const property in city) {
          city[property] = city[property].toLowerCase();
        }

        // si no existe la ciudad lo crea, muestra por consola y retorna; en caso contrario retorna null
        if (exist === null) {
          Cities.create(city).then((result) => console.log(result));
          return city.name;
        } else {
          return null;
        }
      })
    );
    // filtramos los null para saber cuales ciudades agregamos
    const addedCities = namePlaces.filter((name) => name !== null);

    if (addedCities.length > 0) {
      res.send(addedCities);
    } else {
      res.send({ msg: "no se agrego ningún ciudad" });
    }
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findAllCities,
  addManyCities,
  addCity,
  suggestCities,
};
