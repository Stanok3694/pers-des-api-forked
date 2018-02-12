var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workerPassportData = new Schema({
    firstName: String,
    secondName: String,
    lastName: String,
    gender: String,
    dateOfBirth: Date,
    passportTable: String, // SO: looks weird - need to think about renaming;
    codeOfPassportTable: String, // SO: related to prev field;
    passportStartDate: Date,
    relationship: String,
   // SO: and so on, need to confirm with customer; 
});

module.exports = workerPassportData;