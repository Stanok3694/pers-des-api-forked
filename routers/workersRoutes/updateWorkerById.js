const router = require('express').Router();

import { worker, } from "../../models";


router.put('/', (req, res) => {
    const { workerId, updatedFields } = req.body;
    
    worker.findByIdAndUpdate(workerId, {
        $set: updatedFields,
    }, err => {
        if (err) {
            console.log(err);
            return;
        }

        res.send(`worker ${workerId} successfully updated`);
    })
});

module.exports = router;