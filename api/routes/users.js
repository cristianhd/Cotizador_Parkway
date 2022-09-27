var express = require('express');
const { findAllUser, addUser, existUser } = require('../controllers/users');
var router = express.Router();

router.get("/exist",existUser)
router.get("/all", findAllUser);
router.post("/add",addUser);

module.exports = router;
