const mongoose = require('mongoose');
const workerBaseSchema = require('../schemas/workerBase.schema');

const workerBaseModel = mongoose.model('workerBaseModel', workerBaseSchema);

module.exports = workerBaseModel;