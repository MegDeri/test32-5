const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

    describe('calculateDistancePoints', () => {
        it('should return normal hillSize points', () => {
            const actual = calculateDistancePoints(99.5, 98, 98);

            const expected = 63;

            assert.equal(actual, expected);
        });
        it('should return high hillSize points', () => {
            const actual = calculateDistancePoints(125, 120, 120);

            const expected = 69;

            assert.equal(actual, expected);
        });
        it('should return high hillSize points', () => {
            const actual = calculateDistancePoints(215, 200, 200);

            const expected = 138;

            assert.equal(actual, expected);
        });
        it('should return 0 if value is error', () => {
            const actual = calculateDistancePoints(-215, 200, 200);

            const expected = 0;

            assert.equal(actual, expected);
        });
        it('should convert string to nr if possible', () => {
            const actual = calculateDistancePoints("215", 200, 200);

            const expected = 138;

            assert.equal(actual, expected);
        });
        it('should return 0 if is NaN', () => {
            const actual = calculateDistancePoints("string", 200, 200);

            const expected = 0;

            assert.equal(actual, expected);
        });
    });