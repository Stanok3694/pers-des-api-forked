const router = require('express').Router();
import { restoreBackupFromFile } from "../../migrations";

router.get('/', (req, res) => {
    const date = req.query.backupName;
    const backupName = `testData-${date}.json`;
    
    restoreBackupFromFile(backupName);
});

module.exports = router;