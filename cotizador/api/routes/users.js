var express = require('express');
const { findAllUser, addUser } = require('../controllers/users');
var router = express.Router();

router.get("/", findAllUser);
router.post("/",addUser);

module.exports = router;
