const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerPassportData = new Schema({
    workerId: String,
    firstName: String,
    secondName: String,
    lastName: String,
    gender: String,
    dateOfBirth: Date,
    passportTable: String, // SO: looks weird - need to think about renaming;
    codeOfPassportTable: String, // SO: related to prev field;
    passportStartDate: Date,
    relationship: String,
    works: Array,   // SO: need to confirm about format
    payments: Array, // SO: need to confirm about format 
});

module.exports = workerPassportData;