const { Router } = require('express');
const { findExperiencias } = require('../controllers/products.js');
const router = Router();

router.get('/:type',findExperiencias);

module.exports = router;