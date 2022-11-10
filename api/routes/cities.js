const { Router } = require("express");
const {
  findAllCities,
  suggestCities,
  addCities,
} = require("../controllers/cities");

const router = Router();

router.get("/suggest", suggestCities);
router.get("/all", findAllCities);
router.post("/add", addCities);

module.exports = router;
