const router = require('express').Router();

import { getAllWorkers, getWorkerById, createWorker, deleteWorkerById } from "./workersRoutes";
import { workerBaseModel, workerDataModel, } from "../../dal";

router.use('/getAllWorkers', getAllWorkers);
router.use('/getWorkerById', getWorkerById);
router.use('/createWorker', createWorker);
router.use('/deleteWorkerById', deleteWorkerById);

module.exports = router;