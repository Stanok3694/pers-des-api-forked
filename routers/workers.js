const express = require('express')
const router = express.Router();

const workerModel = require('../dal/models/worker.model');
const prepareWorkersData = require('../middleware/prepareWorkersData');

router.get('/', (req, res) => {
    res.send('You are in the workers section');
});

router.get('/getAllWorkers', (req, res) => {
    // SO: need to think about rework that from callback to promise!
    workerModel.find((err, workers) => {
        if (err) return console.log(err);
        
        const results = prepareWorkersData(workers);
        
        if (results.length > 0) {
            res.send(results);
        } else {
            res.send('You have no workers yet!');
        }
    });
});

module.exports = router;