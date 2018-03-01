const prepareProfilePassData = (worker) => {
    const passData = [
        {
            key: "Пол", 
            value: worker.gender,
        },
        {
            key: "Дата рождения",
            value: worker.dateOfBirth !== null & worker.dateOfBirth !== undefined ? new Date(worker.dateOfBirth).toLocaleDateString('en-GB') : null,
        },
        {
            key: "Место рождения",
            value: worker.birthPlace,
        },
        {
            key: "Серия/Номер паспорта",
            value: worker.serialNumber,
        },
        {
            key: "Место выдачи",
            value: worker.passportTable,
        },
        {
            key: "Дата выдачи",
            value: worker.passportStartDate !== null && worker.passportStartDate !== undefined ? new Date(worker.passportStartDate).toLocaleDateString('en-GB') : null,
        },
        {
            key: "Код подразделения",
            value: worker.codeOfPassportTable,
        },
    ];

    return passData;
}

module.exports = prepareProfilePassData;