const router = require('express').Router();

import { worker, } from "../../../models";
import { checkResults, } from "../../../middleware";

router.post('/', (req, res) => {
    const worker = req.body;
    const passData = worker.passData;

    worker.create({
        names: worker.names,
        age: worker.age,
        district: worker.district,
        phoneNumber: worker.phoneNumber,
        position: worker.position,
        // SO: check fields below on existing?
        shifts: 0, // SO: what about case when worker are renewal? <- need to ask Vladimir
        gender: passData.gender,
        dateOfBirth: passData.dateOfBirth,
        passportTable: passData.passportTable,
        codeOfPassportTable: passData.codeOfPassportTable,
        passportStartDate: passData.passportStartDate,
        relationship: passData.relationship,
        works: passData.works,
        payments: passData.payments,
    }, (err, worker) => {
        if (err) {
            console.log(err);
            return;
        }

        res.send(`Successfully created: ${worker}`);
    });
});

module.exports = router;