const router = require('express').Router();

import { workerModel, passDataModel, } from "../../../dal";
import { checkResults, } from "../../../middleware";

router.delete('/', (req, res) => {
    const workerId = req.body.workerId;
    workerModel
        .findByIdAndRemove(workerId, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                passDataModel.findOneAndRemove({ workerId }, err => {
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