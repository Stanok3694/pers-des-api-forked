const router = require('express').Router();

import { worker, } from "../../models";

router.post('/', (req, res) => {
    const modelName = req.body.modelName;

    if (modelName !== 'worker') {
        return;
    } else {
        worker.update({},
            { order: null }, { multi: true },
            (err, worker) => {
                if (err) {
                    console.log(err);
                    return;
                }

                res.send(`Successfully added worker field: order!`);
            });

    }
});

module.exports = router;