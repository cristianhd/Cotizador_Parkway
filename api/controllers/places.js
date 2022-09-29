const Places = require("../models/Lugares");

function suggestPlaces(req, res) {
  const { name } = req.query;

  if (name === undefined) {
    // cuando no viene ninguna consulta
    res.send({ msg: "no data query" });
  } else {
    const namePlaceRegex = ".*" + name.toLowerCase() + ".*";
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
  const emptyPlace = Object.entries(place).length === 0;

  try {
    // caso en el que viene multiples lugares en un array -> next()
    if (Array.isArray(place)) {
      next();
    } else {
      //caso en el que no hay datos
      if (emptyPlace) res.send({ msg: "no data" });
      // transforma todos los valores en minuscula
      for (const property in place) {
        place[property] = place[property].toLowerCase();
      }
      Places.exists({ name: place.name }, function (err, doc) {
        // si el lugar no existe se crea
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
        // transforma todos los valores en minuscula
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
  suggestPlaces,
  findAllPlaces,
  addPlace,
  addManyPlaces,
};
