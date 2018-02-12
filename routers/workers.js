var express = require('express')
var router = express.Router();

var workerModel = require('../dal/models/worker.model');

// get all workers list:
router.get('/', (req, res) => {
    res.send('list of workers...');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    // SO: here will be mock section:
    if (id == '2') {
        workerModel
            .find()
            .byName('Ivan')
            .exec(function(err, persons) { // SO: need to be consistent - about syntax;
                console.log(persons);
                res.send(`information about Ivan: ${persons}`);            
            });
    } else {
        res.send(`information about worker by id: ${id}`);
    }
});

module.exports = router;