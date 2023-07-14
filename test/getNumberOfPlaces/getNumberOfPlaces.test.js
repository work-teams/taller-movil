import { getNumberOfPlaces } from '../../src/data/handleFirebase';

describe('getNumberOfPlaces function', () => {
    // positive test cases
    test('should return the number of places by category id', () => {
        expect(getNumberOfPlaces(0)).toBe(5);
        expect(getNumberOfPlaces(1)).toBe(5);
        expect(getNumberOfPlaces(2)).toBe(2);
    });

    // negative test cases
    test('should return 0 when given an invalid category id', () => {
        const invalidCategoryId = 999;
        expect(getNumberOfPlaces(invalidCategoryId)).toBe(0);
    });
    
});
