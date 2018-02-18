const router = require('express').Router();

import { workerModel } from "../dal";
import { checkResults, prepareWorkersData, parseStringToArray } from "../middleware";

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
    const worker = req.body;
    const skills = parseStringToArray(worker.skills);

    workerModel.create({ 
        firstName: worker.firstName,
        secondName: worker.secondName,
        lastName: worker.lastName,
        age: worker.age,
        district: worker.district,
        position: worker.position,
        skills: [...skills],
        phoneNumber: worker.phoneNumber,
    }, (err, worker) => {
        if (err) {
            console.log(err);
            return;
        }

        res.send(`Successfully created: ${worker}`);
    });
});

module.exports = router;