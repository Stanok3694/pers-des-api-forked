const router = require('express').Router();
const fs = require('fs');

import { worker, } from "../../models";

// SO: need to move into separate file <- ToDo!
function makeBackupFile (data) {
    const formattedData = JSON.stringify(data);
    const date = new Date(Date.now()).toLocaleDateString();
    
    fs.writeFile(`testData-${date}.json`, formattedData, 'utf8', err => {
        if (err) {
            console.log(err);
            throw e;
        }
        return 'testData successfully created';
    });
}

router.get('/', (req, res) => {
    worker.find().lean().exec((err, workers) => {
        if (err) {
            console.log(err);
            return;
        }
        
        try {
            const result = makeBackupFile(workers);
            res.send(result);
        } catch (e) {
            console.log(e);
            return;
        }
    });
});

module.exports = router;