const router = require('express').Router();

import { worker, } from "../../models";
import { checkResults, } from "../../middleware";

router.post('/', (req, res) => {
    const workerId = req.body.workerId;

    worker.findOne({ workerId }).lean().exec((err, workerData) => {
        if (err) {
            console.log(err);
            return;
        }

        const result = workerData; // SO: need to post-process? ToDo!
        res.send(checkResults(result));
    });
});

module.exports = router;