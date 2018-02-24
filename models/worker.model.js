const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const workerSchema = new Schema({
    // SO: required fields below
    names: String,
    age: Number,
    district: String,
    phoneNumber: String,
    position: String,
    inShift: Boolean,
    notes: String,
    // SO: optional fields below
    shifts: Number, // SO: "Смены"
    gender: String,
    dateOfBirth: Date,
    passportTable: String,
    codeOfPassportTable: String,
    passportStartDate: Date,
    relationship: String,
    address: String,
    works: Array, // SO: что делал раньше, на каких объектах работал? <- need to ask Vladimir
    payments: Array,
});

const workerModel = mongoose.model('workerModel', workerSchema);

module.exports = workerModel;