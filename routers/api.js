const express = require('express');
const router = express.Router();

const workers = require('./workers');
const customers = require('./customers');
const objects = require('./objects');

router.use('/workers', workers);
router.use('/customers', customers);
router.use('/objects', objects);

module.exports = router;