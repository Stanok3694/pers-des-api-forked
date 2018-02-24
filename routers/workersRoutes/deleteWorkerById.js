const router = require('express').Router();

import { worker, } from "../../models";
import { checkResults, } from "../../middleware";

router.delete('/', (req, res) => {
    const workerId = req.body.workerId;

    worker.findByIdAndRemove(workerId, err => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(`worker ${workerId} successfully removed!`);
    });
});

module.exports = router;