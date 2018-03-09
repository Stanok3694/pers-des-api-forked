const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const workerSchema = new Schema({
    order: Number,

    names: String,
    age: Number,
    district: String,
    phoneNumber: String,
    position: String,
    notes: String,
    status: String,
    
    shifts: Number, // SO: "Смены"
    gender: String,
    dateOfBirth: Date,
    birthPlace: String,
    serialNumber: String,
    passportTable: String,
    codeOfPassportTable: String,
    passportStartDate: Date,
    address: String,
    works: Array, // SO: что делал раньше, на каких объектах работал? <- need to ask Vladimir
    payments: Array,
});

const workerModel = mongoose.model('workerModel', workerSchema);

module.exports = workerModel;