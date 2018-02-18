const prepareWorkersData = require('../prepareWorkersData');

const workers = [
    {
        __v: 0,
        _id: 'test',
        age: 34,
        district: "Avtozavodskii",
        firstName: "Ivan",
        lastName: "Ivanov",
        phoneNumber: "8-800-555-35-35",
        position: "simple worker",
        secondName: "Ivanovich",
        skills: ["drinking", "smoking"],
    }
];

const preparedWorkers = [
    {
        id: 0,
        firstName: "Ivan",
        secondName: "Ivanovich",
        lastName: "Ivanov",
        phoneNumber: "8-800-555-35-35",
        position: "simple worker",
        age: 34,
        district: "Avtozavodskii",
        skills: ["drinking", "smoking"],
    }
];

describe('Middleware: ', () => {
    it('workers data prepared correctly', () => {
        const actual = prepareWorkersData(workers);
        expect(actual).toEqual(preparedWorkers);
    });
});