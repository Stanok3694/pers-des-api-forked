const prepareWorkersData = (workers) => {
    return workers.map((w, index) => {
        return {
            id: w._id,
            order: w.order,
            names: w.names,
            phoneNumber: w.phoneNumber,
            age: w.age,
            district: w.district,
            position: w.position,
            status: w.status,
            notes: w.notes,
        };
    });
}

module.exports = prepareWorkersData;