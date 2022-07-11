const { Router } = require("express");

const {
  findExperiencias,
  findTraslados,
  findActividades,
  findAsistencias,
  addExperiencias,
  addTraslados,
  addActividades,
  addAsistencias,
  findPlaces,
} = require("../controllers/products.js");
const router = Router();

router.get("/experiencias", findExperiencias);
router.post("/experiencias", addExperiencias);

router.get("/traslados", findTraslados);
router.post("/traslados", addTraslados);

router.get("/actividades", findActividades);
router.post("/actividades", addActividades);

router.get("/asistencias", findAsistencias);
router.post("/asistencias", addAsistencias);

router.get("/places", findPlaces);

module.exports = router;
