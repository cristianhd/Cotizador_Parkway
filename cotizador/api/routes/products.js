const { Router } = require("express");
const Experiencia = require("../models/Experiencias")
const {
  findExperiencias,
  findHospedaje,
  postExperiencia,
  postHospedajes,
} = require("../controllers/products.js");
const router = Router();

router.get("/:type", findExperiencias, findHospedaje);
router.post("/:type",postExperiencia,postHospedajes);

module.exports = router;
