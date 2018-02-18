const router = require('express').Router();

import { getAllWorkers, getPassData, createWorker, } from "./workersRoutes";

import { workerModel, passDataModel, } from "../../dal";
import { checkResults, parseStringToArray } from "../../middleware";

router.use('/getAllWorkers', getAllWorkers);
router.use('/getPassData', getPassData);
router.use('/createWorker', createWorker);

module.exports = router;