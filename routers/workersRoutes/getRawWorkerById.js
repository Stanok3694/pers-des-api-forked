const router = require('express').Router();

import { worker, } from "../../models";
import { checkResults, prepareProfileData} from "../../middleware";

router.post('/', (req, res) => {
    const workerId = req.body.workerId;

    worker.findOne({ _id: workerId }).lean().exec((err, workerData) => {
        if (err) {
            console.log(err);
            return;
        }

        const result = workerData;
        res.send(checkResults(result));
    });
});

module.exports = router;