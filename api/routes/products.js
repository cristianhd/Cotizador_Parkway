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
  findHospedajes,
  addHospedajes,
  updatePlanes,
  updateHospedajes,
  updateTraslados,
  updateActividades,
  updateAsistencias,
  deletePlanes,
  deleteHospedajes,
  deleteTraslados,
  deleteActividades,
  deleteAsistencias,
  findById,
} = require("../controllers/products.js");
const router = Router();

router.get("/planes", findPlanes, findById);
router.post("/planes", addPlanes);
router.put("/planes", updatePlanes);
router.delete("/planes", deletePlanes);

router.get("/hospedajes", findHospedajes);
router.post("/hospedajes", addHospedajes);
router.put("/hospedajes", updateHospedajes);
router.delete("/hospedajes", deleteHospedajes);

router.get("/traslados", findTraslados);
router.post("/traslados", addTraslados);
router.put("/traslados", updateTraslados);
router.delete("/traslados", deleteTraslados);

router.get("/actividades", findActividades);
router.post("/actividades", addActividades);
router.put("/actividades", updateActividades);
router.delete("/actividades", deleteActividades);

router.get("/asistencias", findAsistencias);
router.post("/asistencias", addAsistencias);
router.put("/asistencias", updateAsistencias);
router.delete("/asistencias", deleteAsistencias);

module.exports = router;
