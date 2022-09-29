const { Router } = require("express");
const {
  findSuggestPlaces,
  findAllPlaces,
  addPlace,
  addManyPlaces,
} = require("../controllers/places");

const router = Router();

router.get("/all", findAllPlaces);
router.get("/find", findSuggestPlaces);
router.post("/add", addPlace, addManyPlaces);

module.exports = router;
