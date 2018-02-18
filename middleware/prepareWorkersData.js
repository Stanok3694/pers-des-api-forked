const prepareWorkersData = (workers) => {
    return workers.map((w, index) => {
        let result = {
            id: w._id,
            firstName: w.firstName,
            secondName: w.secondName,
            lastName: w.lastName,
            phoneNumber: w.phoneNumber,
            position: w.position,
            age: w.age,
            district: w.district,
            skills: [],
        };
        result.skills = w.skills.map(s => {
            return s;
        });
        return result;
    });
}

module.exports = prepareWorkersData;