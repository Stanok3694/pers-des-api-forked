const checkReslts = require('./checkResults');
const noResultsMessage = "You have no data in database";

const zeroArr = [];
const nonZeroArr = ["test"];

describe('Middlware:', () => {
    it('check that there is no result', () => {
        const actual = checkReslts(zeroArr);
        expect(actual).toEqual(noResultsMessage);
    });

    it('check that there is result', () => {
        const actual = checkReslts(nonZeroArr);
        expect(actual).toEqual(nonZeroArr);
    });
})