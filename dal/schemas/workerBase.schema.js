const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerBase = new Schema({
    firstName: String,
    secondName: String,
    lastName: String,
    age: Number,
    district: String,
    position: String, // SO: casual worker, professional and so on;
    skills: Array, // SO: array of strings
    phoneNumber: String, // SO: 'cause +7(903)-xxx-xx-xx <- need to think about format;
});

module.exports = workerBase;