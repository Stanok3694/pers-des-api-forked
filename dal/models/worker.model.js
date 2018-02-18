const mongoose = require('mongoose');
const workerSchema = require('../schemas/worker.schema');

const workerModel = mongoose.model('workerModel', workerSchema);

module.exports = workerModel;