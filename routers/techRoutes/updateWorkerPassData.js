const router = require('express').Router();
import { worker, } from "../../models";

router.post('/', (req, res) => {
    const modelName = req.body.modelName;

    if (modelName !== 'worker') {
        return;
    } else {
        worker.update({},
            { typeOfDoc: null, citizenship: null }, { multi: true }, 
                (err, worker) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                
                    res.send(`Successfully updated!`);
            });
    }
});

module.exports = router;