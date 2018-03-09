const router = require('express').Router();
const fs = require('fs');

import { worker, } from "../../models";
import { workers } from 'cluster';

router.get('/', (req, res) => {
    const date = req.query.backupName;
    const backupName = `testData-${date}.json`;

    fs.readFile(backupName, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
            return;
        }

        const backup = JSON.parse(data);

        backup.forEach(entity => {
            worker.create(entity, (err, worker) => {
                if (err) {
                    console.log(err);
                    res.send(`error: ${err}`);
                    return;
                }
            });
        });

        res.send('data successfully restored');
    });
});

module.exports = router;