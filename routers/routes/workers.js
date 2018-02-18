const router = require('express').Router();

import { getAllWorkers, getPassData, createWorker, deleteWorkerById } from "./workersRoutes";

import { workerModel, passDataModel, } from "../../dal";
import { checkResults, parseStringToArray } from "../../middleware";

router.use('/getAllWorkers', getAllWorkers);
router.use('/getPassData', getPassData);
router.use('/createWorker', createWorker);
router.use('/deleteWorkerById', deleteWorkerById);

module.exports = router;