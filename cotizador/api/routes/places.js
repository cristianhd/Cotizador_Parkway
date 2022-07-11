const { Router } = require("express");
const { findPlaces, findAllPlaces } = require("../controllers/places");

const router = Router();

router.get("/", findPlaces, findAllPlaces);


module.exports = router;