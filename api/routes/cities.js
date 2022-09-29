const { Router } = require("express");
const {
  findAllCities,
  addManyCities,
  addCity,
  suggestCities,
} = require("../controllers/cities");

const router = Router();

router.get("/suggest", suggestCities);
router.get("/all", findAllCities);
router.post("add", addCity, addManyCities);
