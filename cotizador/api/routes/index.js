var express = require('express');

var router = express.Router();
const usersRoutes = require('./users')
const productsRoutes = require('./products.js')


// router.use('/users', usersRoutes)
router.use('/products', productsRoutes)

module.exports = router;
