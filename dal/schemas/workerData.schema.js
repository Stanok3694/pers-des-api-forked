const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerData = new Schema({
    workerId: String,
    firstName: String,
    secondName: String,
    lastName: String,
    gender: String,
    dateOfBirth: Date,
    passportTable: String,
    codeOfPassportTable: String,
    passportStartDate: Date,
    relationship: String,
    works: Array,   // SO: need to confirm about format
    payments: Array, // SO: need to confirm about format 
});

module.exports = workerData;