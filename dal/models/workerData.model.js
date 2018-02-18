const mongoose = require('mongoose');
const workerDataSchema = require('../schemas/workerData.schema');

const workerDataModel = mongoose.model('workerDataModel', workerDataSchema);

module.exports = workerDataModel;