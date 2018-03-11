const getOrderFromNotes = require('../getOrderFromNotes');

const testNotes1 = "Странный, покорный, строгий, №10";
const testNotes2 = "Странный, покорный, строгий, №5";
const testNotes3 = "Странный, покорный, строгий";
const testNotes4 = "№5 Странный, покорный, строгий";

describe('Middleware: ', () => {
    it('should get double number order', () => {
        const order = getOrderFromNotes(testNotes1);
        expect(order).toEqual("10");
    });

    it('should get one number order at end', () => {
        const order = getOrderFromNotes(testNotes2);
        expect(order).toEqual("5");
    });

    it('should get one number order at start', () => {
        const order = getOrderFromNotes(testNotes4);
        expect(order).toEqual("5");
    });

    it('should not get order if there is not order', () => {
        const order = getOrderFromNotes(testNotes3);
        expect(order).toEqual(null);
    });

    it('should not get order if there is not source', () => {
        const order = getOrderFromNotes(null);
        expect(order).toEqual(null);
    });
})