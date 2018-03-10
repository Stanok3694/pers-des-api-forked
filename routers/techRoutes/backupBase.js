const router = require('express').Router();
import { worker, } from "../../models";
import { makeBackupFile } from "../../migrations";

router.get('/', (req, res) => {
    worker.find().lean().exec((err, workers) => {
        if (err) {
            console.log(err);
            return;
        }
        
        const result = makeBackupFile(workers);
        res.send(result);
    });
});

module.exports = router;