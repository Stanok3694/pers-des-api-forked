const prepareWorkersData = (workers) => {
    return workers.map((w, index) => {
        let result = {
            id: index,
            firstName: w.firstName,
            secondName: w.secondName,
            lastName: w.lastName,
            phoneNumber: w.phoneNumber,
            position: w.phoneNumber,
            age: w.age,
            district: w.age,
            skills: [],
        };
        result.skills = w.skills.map(s => {
            return s;
        });
        return result;
    });
}

module.exports = prepareWorkersData;