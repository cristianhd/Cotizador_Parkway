var express = require("express");

var router = express.Router();
const usersRoutes = require("./users");
const productsRoutes = require("./products.js");
const placesRoutes = require("./places.js");
const citiesRoutes = require("./cities.js");
const { VerifyToken } = require("../controllers/protected");

router.use("/users", VerifyToken, usersRoutes);
router.use("/products", productsRoutes);
router.use("/places", placesRoutes);
// router.use("/cities", citiesRoutes);

module.exports = router;
