const router = require('express').Router();

import { worker, } from "../../models";

router.post('/', (req, res) => {
    const modelName = req.body.modelName;
    const option = req.body.option;

    if (modelName !== 'worker') {
        return;
    } else {
        if (option === "add field") {
            worker.update({},
                { order: null }, { multi: true }, 
                    (err, worker) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                    
                        res.send(`Successfully updated!`);
                });
        } else if (option === "add value") {
            worker.find().lean().sort({ names: 'ascending' }).exec((err, workers) => {
                if (err) {
                    console.log(err);
                    return;
                }

                workers.map((e, index) => {
                    e.order = index;
                    return e;
                });
    
                console.log(`workers: ${workers}`);
                res.send(workers);
            });
        }
    }
});

module.exports = router;