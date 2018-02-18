const router = require('express').Router();
import { customers, workers, objects } from "./routes";

router.use('/workers', workers);
router.use('/customers', customers);
router.use('/objects', objects);

module.exports = router;