const Places = require("../models/Lugares");

function findPlaces(req, res) {
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
        for (const property in place) {
          place[property] = place[property].toLowerCase(); // guardado en minusculas
        }
      }
    }

    Places.exists({ name: place.name }, function (err, doc) {
      // si el lugar no existe creo el lugar
      if (doc === null) {
        Places.create(place).then((result) => {
          res.json(result);
        });
      } else {
        // si el lugar existe envio msg al cliente
        res.send({ msg: "ya existe el lugar" });
      }
      if (err) console.log(err);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function addManyPlaces(req, res) {
  const places = req.body;
  const addedItemsPlaces = [];

  try {
    places.forEach((place) => {
      for (const property in place) {
        place[property] = place[property].toLowerCase(); // guardado en minusculas
      }

      Places.exists({ name: place.name }, function (err, doc) {
        // si el lugar no existe creo el lugar y lo guardo en los lugares agregados
        if (doc === null) {
          Places.create(place).then((result) => {
            addedItemsPlaces.push(result);
          });
        } else {
          // si el lugar existe se envia un msg a la consola con el nombre del lugar
          console.log(`ya existe este lugar: ${place.name}`);
        }
        if (err) console.log(err);
      });
    });

    if (addedItemsPlaces.length > 0) {
      res.send(addedItemsPlaces);
    } else {
      res.send({ msg: "no se agrego ningun lugar" });
    }
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findPlaces,
  findAllPlaces,
  addPlace,
  addManyPlaces,
};
