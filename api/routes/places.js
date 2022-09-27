const { Router } = require("express");
const {
  findPlaces,
  findAllPlaces,
  addPlace,
  addManyPlaces,
} = require("../controllers/places");

const router = Router();

router.get("/all", findAllPlaces);
router.get("/find", findPlaces);
router.post("/add", addPlace, addManyPlaces);

module.exports = router;
