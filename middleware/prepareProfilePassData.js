const prepareProfilePassData = (worker) => {
    const passData = [
        {
            key: "Пол", 
            value: worker.gender,
        },
        {
            key: "Дата рождения",
            value: new Date(worker.dateOfBirth).toLocaleDateString('en-GB'),
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
            value: worker.passportStartDate,
        },
        {
            key: "Код подразделения",
            value: worker.codeOfPassportTable,
        },
    ];

    return passData;
}

module.exports = prepareProfilePassData;