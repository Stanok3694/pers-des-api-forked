var workerModel = require('../dal/models/worker.model');

var IvanMock = new workerModel({
    firstName: 'Ivan',
    secondName: 'Ivanovich',
    lastName: 'Ivanov',
    age: 34,
    district: 'Avtozavodskii',
    position: 'simple worker', // SO: casual worker, professional and so on;
    skills: ['drinking', 'smoking'],
    phoneNumber: '8-800-555-35-35',
});

module.exports = IvanMock;