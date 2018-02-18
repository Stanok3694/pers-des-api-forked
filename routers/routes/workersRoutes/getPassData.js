const router = require('express').Router();

import { passDataModel, } from "../../../dal";
import { checkResults, } from "../../../middleware";

router.post('/', (req, res) => {
    const workerId = req.body.workerId;
    passDataModel
        .findOne({ workerId }).lean().exec((err, passData) => {
            if (err) {
                console.log(err);
                return;
            }
            
            const result = passData; // SO: need to post-process?
            res.send(checkResults(result));
    });
});

module.exports = router;