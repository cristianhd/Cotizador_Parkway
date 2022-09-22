const { Router } = require("express");

const {
  findTraslados,
  findActividades,
  findAsistencias,
  addPlanes,
  addTraslados,
  addActividades,
  addAsistencias,
  findPlanes,
} = require("../controllers/products.js");
const router = Router();

router.get("/planes", findPlanes);
router.post("/planes", addPlanes);

router.get("/traslados", findTraslados);
router.post("/traslados", addTraslados);

router.get("/actividades", findActividades);
router.post("/actividades", addActividades);

router.get("/asistencias", findAsistencias);
router.post("/asistencias", addAsistencias);

module.exports = router;
