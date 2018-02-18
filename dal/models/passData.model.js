const mongoose = require('mongoose');
const passDataSchema = require('../schemas/passData.schema');

const passDataModel = mongoose.model('passDataModel', passDataSchema);

module.exports = passDataModel;