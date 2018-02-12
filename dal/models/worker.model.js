var mongoose = require('mongoose');
var workerSchema = require('../schemas/worker.schema');

var workerModel = mongoose.model('workerModel', workerSchema);

module.exports = workerModel;