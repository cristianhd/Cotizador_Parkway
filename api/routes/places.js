const { Router } = require("express");
const {
  suggestPlaces,
  findAllPlaces,
  addPlace,
  addManyPlaces,
} = require("../controllers/places");

const router = Router();

router.get("/suggest", suggestPlaces);
router.get("/all", findAllPlaces);
router.post("/add", addPlace, addManyPlaces);

module.exports = router;
