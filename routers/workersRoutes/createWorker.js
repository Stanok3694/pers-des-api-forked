const router = require('express').Router();

import { worker, } from "../../models";
import { checkResults, } from "../../middleware";

router.post('/', (req, res) => {
    const workerData = req.body;
    const baseData = workerData.baseData;
    const passData = workerData.passData;

    worker.create({
        names: baseData.names,
        age: baseData.age,
        district: baseData.district,
        phoneNumber: baseData.phoneNumber,
        position: baseData.position,
        notes: baseData.notes,
        status: baseData.status,
        // SO: check fields below on existing?
        gender: passData.gender,
        dateOfBirth: passData.dateOfBirth ? passData.dateOfBirth : null,
        birthPlace: passData.birthPlace,
        serialNumber: passData.serialNumber,
        passportTable: passData.passportTable,
        codeOfPassportTable: passData.codeOfPassportTable,
        passportStartDate: passData.passportStartDate ? passData.passportStartDate : null,
        works: workerData.works,
        payments: workerData.payments,
    }, (err, worker) => {
        if (err) {
            console.log(err);
            return;
        }

        res.send(`Successfully created: ${worker}`);
    });
});

module.exports = router;