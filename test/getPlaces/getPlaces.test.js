import { getPlaces } from '../../src/data/MockDataAPI';
import { places } from '../../src/data/dataArrays';

describe('getPlaces', () => {
    // positive test cases
    test('should return an array of places with the given categoryId', () => {
        const input = [0, 1, 2];
        const expectedOutput = [
            places.filter(place => place.categoryId === 0),
            places.filter(place => place.categoryId === 1),
            places.filter(place => place.categoryId === 2),
        ];

        input.forEach((categoryId, index) => {
            expect(getPlaces(categoryId)).toEqual(expectedOutput[index]);
        });
    });

    // negative test cases
    test('should return an empty array when given an invalid categoryId', () => {
        const invalidCategoryId = 999;
        expect(getPlaces(invalidCategoryId)).toEqual([]);
    });

});
