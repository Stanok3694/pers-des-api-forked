const router = require('express').Router();

import { worker, } from "../../models";
import { prepareWorkersData, checkResults, } from "../../middleware";

router.get('/', (req, res) => {
    // SO: need to think about rework that from callback to promise!
    workerBaseModel
        .find().lean().exec((err, workers) => {
            if (err) {
                console.log(err);
                return;
            }

            const results = prepareWorkersData(workers);
            res.send(checkResults(results));
        });
});

module.exports = router;