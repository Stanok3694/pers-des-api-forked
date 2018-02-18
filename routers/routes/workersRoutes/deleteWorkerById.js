const router = require('express').Router();

import { workerBaseModel, workerDataModel, } from "../../../dal";
import { checkResults, } from "../../../middleware";

router.delete('/', (req, res) => {
    const workerId = req.body.workerId;
    workerBaseModel
        .findByIdAndRemove(workerId, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                workerDataModel.findOneAndRemove({ workerId }, err => {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        res.send('worker successfully removed!');
                    }
                })
            }
        });
});

module.exports = router;