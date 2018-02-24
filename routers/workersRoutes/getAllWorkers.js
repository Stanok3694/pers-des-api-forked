const router = require('express').Router();

import { worker, } from "../../models";
import { prepareDataForWorkersList, checkResults, } from "../../middleware";

router.get('/', (req, res) => {
    worker.find().lean().exec((err, workers) => {
        if (err) {
            console.log(err);
            return;
        }

        const results = prepareDataForWorkersList(workers);
        res.send(checkResults(results));
    });
});

module.exports = router;