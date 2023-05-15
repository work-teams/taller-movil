import { getNumberOfPlaces } from './getNumberOfPlaces';

describe('getNumberOfPlaces function', () => {
    it('should return the number of places by category id', () => {
        expect(getNumberOfPlaces(0)).toBe(5);
        expect(getNumberOfPlaces(1)).toBe(5);
        expect(getNumberOfPlaces(2)).toBe(2);
    });
});
