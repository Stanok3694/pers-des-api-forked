const workerBaseModel = require('../dal/models/workerBase.model');

const IvanMock = new workerBaseModel({
    firstName: 'Ivan',
    secondName: 'Ivanovich',
    lastName: 'Ivanov',
    age: 34,
    district: 'Avtozavodskii',
    position: 'simple worker',
    skills: ['drinking', 'smoking'],
    phoneNumber: '8-800-555-35-35',
});

module.exports = IvanMock;