const Places = require("../models/Places");

function findPlaces(req, res, next) {
  const { place } = req.query;

  const regex = ".*" + place + ".*";

  if (place === undefined) {
    // cuando no viene ninguna consulta
    next();
  } else {
    try {
      Places.find({ name: { $regex: regex } })
        .limit(5)
        .then((places) => {
          res.json(places);
        });
    } catch (error) {
      res.send(error.message);
    }
  }
}

function findAllPlaces(req, res, next) {
  try {
    Places.find({}).then((places) => {
      res.send(places);
    });
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findPlaces,
  findAllPlaces,
};
