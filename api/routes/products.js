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
  findPlanesById,
  findHospedajesById,
  findTrasladosById,
  findActividadesById,
  findAsistenciasById,
  addManyPlanes,
  addPlan,
  addManyHospedajes,
  addManyTraslados,
  addManyActividades,
  addManyAsistencias,
  updateManyPlanes,
  updateManyHospedajes,
} = require("../controllers/products.js");
const router = Router();

router.get("/planes", findPlanes, findPlanesById);
router.post("/planes", addManyPlanes, addPlan);
router.patch("/planes", updatePlanes, updateManyPlanes);
router.delete("/planes", deletePlanes);

router.get("/hospedajes", findHospedajes, findHospedajesById);
router.post("/hospedajes", addManyHospedajes, addHospedajes);
router.patch("/hospedajes", updateHospedajes, updateManyHospedajes);
router.delete("/hospedajes", deleteHospedajes);

router.get("/traslados", findTraslados, findTrasladosById);
router.post("/traslados", addManyTraslados, addTraslados);
router.put("/traslados", updateTraslados);
router.delete("/traslados", deleteTraslados);

router.get("/actividades", findActividades, findActividadesById);
router.post("/actividades", addManyActividades, addActividades);
router.put("/actividades", updateActividades);
router.delete("/actividades", deleteActividades);

router.get("/asistencias", findAsistencias, findAsistenciasById);
router.post("/asistencias", addManyAsistencias, addAsistencias);
router.put("/asistencias", updateAsistencias);
router.delete("/asistencias", deleteAsistencias);

module.exports = router;
