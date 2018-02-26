const router = require('express').Router();

import { worker, } from "../../models";

router.delete('/', (req, res) => {
    const workerId = req.query.workerId;

    worker.findByIdAndRemove(workerId, err => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(`worker ${workerId} successfully removed!`);
    });
});

module.exports = router;