const router = require('express').Router();

import { 
    getAllWorkers, getWorkerById, getRawWorkerById, 
    createWorker, deleteWorkerById, updateWorkerById, 
} from "../workersRoutes";

router.use('/getAllWorkers', getAllWorkers);
router.use('/getWorkerById', getWorkerById);
router.use('/getRawWorkerById', getRawWorkerById);
router.use('/createWorker', createWorker);
router.use('/deleteWorkerById', deleteWorkerById);
router.use('/updateWorkerById', updateWorkerById);

module.exports = router;