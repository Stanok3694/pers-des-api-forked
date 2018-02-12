var mongoose = require('mongoose');
var passDataSchema = require('../schemas/passData.schema');

var passDataModel = mongoose.model('passDataModel', passDataSchema);

module.exports = passDataModel;