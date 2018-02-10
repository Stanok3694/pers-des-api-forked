var express = require('express')
var router = express.Router();

// get all objects list:
router.get('/', (req, res) => {
    res.send('list of objects...');
});

// get specific objects by id:
router.get('/:id', (req, res) => {
    res.send('information about object by id');
});

module.exports = router;