import { worker } from 'cluster';

const prepareProfileBaseData = require('./prepareProfileBaseData');
const prepareProfilePassData = require('./prepareProfilePassData');

const prepareProfileData = (worker) => {
    const baseData = prepareProfileBaseData(worker);
    const passData = prepareProfilePassData(worker);

    return {
        baseData,
        passData,
        works: worker.works,
        payments: worker.payments,
    }
}

module.exports = prepareProfileData;