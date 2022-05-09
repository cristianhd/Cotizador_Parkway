var express = require('express');
const { findAllUser } = require('../controllers/users');
var router = express.Router();

router.get("/all", findAllUser);
// router.post("/users",addUsers);

module.exports = router;
