const prepareWorkersData = require('../prepareDataForWorkersList');

const workers = [
    {
        __v: 0,
        _id: 'test',
        age: 34,
        district: "Avtozavodskii",
        names: "Ivanov Ivan Ivanovich",
        phoneNumber: "8-800-555-35-35",
        position: "simple worker",
        skills: ["drinking", "smoking"],
        notes: "Nice guy",
        status: "Не в смене"
    }
];

const preparedWorkers = [
    {
        id: "test",
        names: "Ivanov Ivan Ivanovich",
        phoneNumber: "8-800-555-35-35",
        position: "simple worker",
        age: 34,
        district: "Avtozavodskii",
        notes: "Nice guy",
        status: "Не в смене"
    }
];

describe('Middleware: ', () => {
    it('workers data prepared correctly', () => {
        const actual = prepareWorkersData(workers);
        expect(actual).toEqual(preparedWorkers);
    });
});