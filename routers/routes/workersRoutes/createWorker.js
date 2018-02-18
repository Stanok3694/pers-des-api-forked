const router = require('express').Router();

import { workerModel, passDataModel, } from "../../../dal";
import { checkResults, parseStringToArray, } from "../../../middleware";

router.post('/', (req, res) => {
    const worker = req.body;
    const skills = parseStringToArray(worker.skills);
    
    const passData = worker.passData;
    const works = parseStringToArray(passData.works);
    const payments = parseStringToArray(passData.payments);

    workerModel.create({ 
        firstName: worker.firstName,
        secondName: worker.secondName,
        lastName: worker.lastName,
        age: worker.age,
        district: worker.district,
        position: worker.position,
        skills: [...skills],
        phoneNumber: worker.phoneNumber,
    }, (err, worker) => {
        if (err) {
            console.log(err);
            return;
        }
        // SO: callback hell starts here <- need to rework! have to! ToDo!
        passDataModel.create({
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
            works: [...works],
            payments: [...payments],
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