const prepareWorkersData = (workers) => {
    return workers.map((w, index) => {
        return {
            id: w._id,
            names: w.names,
            phoneNumber: w.phoneNumber,
            age: w.age,
            district: w.district,
            position: w.position,
            shifts: w.shifts,
        };
    });
}

module.exports = prepareWorkersData;