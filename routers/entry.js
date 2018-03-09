const router = require('express').Router();
import { customers, workers, objects } from "./routes";
import { backupBase, restoreBackup, updateModels, } from "./techRoutes";

router.use('/workers', workers);
router.use('/customers', customers);
router.use('/objects', objects);
// SO: tech routes below:
router.use('/getBackup', backupBase);
router.use('/restoreBackup', restoreBackup);
router.use('/updateWorkerModel', updateModels); // SO: need once?
module.exports = router;