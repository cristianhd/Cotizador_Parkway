const Places = require("../models/Lugares");

function findSuggestPlaces(req, res) {
  const { namePlace } = req.query;
  const namePlaceRegex = ".*" + namePlace.toLowerCase + ".*";

  console.log(namePlaceRegex);

  if (namePlace === undefined) {
    // cuando no viene ninguna consulta
    res.send({ msg: "no data query" });
  } else {
    try {
      // consulta 5 primeros lugares
      Places.find({ name: { $regex: namePlaceRegex } })
        .limit(5)
        .then((places) => {
          res.json(places);
        });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function findAllPlaces(req, res) {
  try {
    Places.find().then((places) => {
      res.send(places);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function addPlace(req, res, next) {
  const place = req.body;

  try {
    // caso en el que viene multiples lugares en un array -> next()
    if (Array.isArray(place)) {
      next();
    } else {
      // caso en el que viene un solo lugar
      if (typeof place === "object") {
        // guardado en minusculas
        for (const property in place) {
          place[property] = place[property].toLowerCase();
        }
      }
      Places.exists({ name: place.name }, function (err, doc) {
        // si el lugar no existe creo el lugar
        if (doc === null) {
          Places.create(place).then((result) => {
            console.log(result);
            res.json(result);
          });
        } else {
          // si el lugar existe envio msg al cliente
          res.send({ msg: "ya existe el lugar" });
        }
        if (err) console.log(err);
      });
    }
  } catch (error) {
    res.send(error.message);
  }
}

async function addManyPlaces(req, res) {
  const places = req.body;

  try {
    var namePlaces = await Promise.all(
      places.map(async (place) => {
        // guardado en minusculas
        for (const property in place) {
          place[property] = place[property].toLowerCase();
        }

        var exist = await Places.exists({ name: place.name });
        // si no existe el lugar lo crea, muestra por consola y retorna; en caso contrario retorna null
        if (exist === null) {
          Places.create(place).then((result) => console.log(result));
          return place.name;
        } else {
          return null;
        }
      })
    );
    // filtramos los null para saber cuales lugares agregamos
    const addedPlaces = namePlaces.filter((name) => name !== null);

    if (addedPlaces.length > 0) {
      res.send(addedPlaces);
    } else {
      res.send({ msg: "no se agrego ningún lugar" });
    }
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findSuggestPlaces,
  findAllPlaces,
  addPlace,
  addManyPlaces,
};
