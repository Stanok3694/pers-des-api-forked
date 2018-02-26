const router = require('express').Router();

import { getAllWorkers, getWorkerById, createWorker, deleteWorkerById, updateWorkerById, } from "../workersRoutes";

router.use('/getAllWorkers', getAllWorkers);
router.use('/getWorkerById', getWorkerById);
router.use('/createWorker', createWorker);
router.use('/deleteWorkerById', deleteWorkerById);
router.use('/updateWorkerById', updateWorkerById);

module.exports = router;