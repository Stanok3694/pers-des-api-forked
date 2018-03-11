const router = require('express').Router();
import { worker, } from "../../models";
import { getOrderFromNotes, } from "../../middleware";

router.post('/', (req, res) => {
    const modelName = req.body.modelName;

    if (modelName !== 'worker') {
        return;
    } else {
        worker.find().lean().exec((err, workers) => {
            const targets = workers.map(w => {
                return {
                    id: w._id,
                    order: getOrderFromNotes(w.notes)
                }
            });

            targets.forEach(target => {
                worker.findByIdAndUpdate(target.id, { order: target.order }, (err, worker) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            });

            res.send("Collection successfully updated!");
        });
    }
});

module.exports = router;