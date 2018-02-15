const express = require('express')
const router = express.Router();

const workerModel = require('../dal/models/worker.model');
const prepareWorkersData = require('../middleware/prepareWorkersData');
const checkResults = require('../middleware/checkResults');

router.get('/', (req, res) => {
    res.send('You are in the workers section');
});

router.get('/getAllWorkers', (req, res) => {
    // SO: need to think about rework that from callback to promise!
    workerModel
        .find().lean().exec((err, workers) => {
            if (err) {
                console.log(err);
                return;
            }

            const results = prepareWorkersData(workers);
            res.send(checkResults(results));
        });
});

router.post('/createWorker', (req, res) => {
    console.log(req);
    
    // workerModel.create({

    // }, (err, worker) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }

    //     res.send(`Successfully created: ${worker}`);
    // });
});

module.exports = router;