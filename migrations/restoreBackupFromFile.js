import { worker, } from "../../models";
const fs = require('fs');

const restoreBackupFromFile = (backupName) => {
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
                    return;
                }
            });
        });
    });
};

export default restoreBackupFromFile;