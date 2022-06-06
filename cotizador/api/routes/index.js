var express = require('express');

var router = express.Router();
const usersRoutes = require('./users')
const productsRoutes = require('./products.js');
const { VerifyToken } = require('../controllers/protected');


router.use('/users', VerifyToken, usersRoutes)
router.use('/products', productsRoutes)

module.exports = router;
