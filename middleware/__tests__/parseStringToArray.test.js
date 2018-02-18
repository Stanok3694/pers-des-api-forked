const str = "['aaa', 'bbb']";
const expected = ["aaa", "bbb"];

const parseStringToArray = require('../parseStringToArray');

describe('Middleware:', () => {
    it('parse string to array of strings', () => {
        const actual = parseStringToArray(str);
        expect(actual).toEqual(expected);
    });
});