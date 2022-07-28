var express = require('express');
const { findAllUser, addUser, existUser } = require('../controllers/users');
var router = express.Router();

router.get("/exist",existUser)
router.get("/allUser", findAllUser);
router.post("/",addUser);

module.exports = router;
