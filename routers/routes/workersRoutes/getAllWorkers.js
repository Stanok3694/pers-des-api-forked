const router = require('express').Router();

import { workerModel, } from "../../../dal";
import { prepareWorkersData, checkResults, } from "../../../middleware";

router.get('/', (req, res) => {
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

module.exports = router;