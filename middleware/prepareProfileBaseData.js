const prepareProfileBaseData = (worker) => {
    const primaryBaseData = [
        {
            key: "Номер анкеты",
            value: worker.order,
        },
        {
            key: "ФИО", 
            value: worker.names,
        },
        {
            key: "Возраст",
            value: worker.age,
        },
        {
            key: "Район",
            value: worker.district,
        },
        {
            key: "Специальность",
            value: worker.position,
        },
        {
            key: "Статус",
            value: worker.status,
        },
        {
            key: "Телефон",
            value: worker.phoneNumber,
        }
    ];
    const baseData = {
        primaryBaseData,
        notes: worker.notes,
    }

    return baseData;
}

module.exports = prepareProfileBaseData;