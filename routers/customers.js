var express = require('express')
var router = express.Router();

// get all customers list:
router.get('/', (req, res) => {
    res.send('list of customers...');
});

// get specific customer by id:
router.get('/:id', (req, res) => {
    res.send('information about customer by id');
});

module.exports = router;