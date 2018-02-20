const router = require('express').Router();

import { workerBaseModel, workerDataModel, } from "../../../dal";
import { checkResults, parseStringToArray, } from "../../../middleware";

router.post('/', (req, res) => {
    const worker = req.body;
    const passData = worker.passData;

    workerBaseModel.create({ 
        firstName: worker.firstName,
        secondName: worker.secondName,
        lastName: worker.lastName,
        age: worker.age,
        district: worker.district,
        position: worker.position,
        skills: worker.skills,
        phoneNumber: worker.phoneNumber,
    }, (err, worker) => {
        if (err) {
            console.log(err);
            return;
        }
        // SO: callback hell starts here <- need to rework! have to! ToDo!
        workerDataModel.create({
            workerId: worker._id,
            firstName: worker.firstName,
            secondName: worker.secondName,
            lastName: worker.lastName,
            gender: passData.gender,
            dateOfBirth: passData.dateOfBirth,
            passportTable: passData.passportTable,
            codeOfPassportTable: passData.codeOfPassportTable,
            passportStartDate: passData.passportStartDate,
            relationship: passData.relationship,
            works: passData.works,
            payments: passData.payments,
        }, (err, passData) => {
            if (err) {
                console.log(err);
                return;
            }

            res.send(`Successfully created: 
                ${worker} 
                with passData: 
                ${passData}`
            );
        });
    });
});

module.exports = router;