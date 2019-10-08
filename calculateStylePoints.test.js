const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('correct style points', () => {
        const actual = calculateStylePoints([16, 16.5, 17, 16, 18])
        const expected = 49.5;
        
        assert.equal(actual, expected)
    });
});