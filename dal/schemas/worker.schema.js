var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// SO: how can i make this more elegant? 'cause I have separate scheme for passport data...
var workerSchema = new Schema({
    firstName: String,
    secondName: String,
    lastName: String,
    age: Number,
    district: String,
    position: String, // SO: casual worker, professional and so on;
    skills: Array,
    phoneNumber: String, // SO: 'cause +7(903)-xxx-xx-xx <- need to think about format;
});

module.exports = workerSchema;