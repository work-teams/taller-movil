import { getCategoryById } from '../../src/data/MockDataAPI';
import { categories } from '../../src/data/dataArrays';

describe('getCategoryById', () => {
    // positive test cases
    test('should return the category with the given id', () => {
        const input = [0, 1, 2];
        const expectedOutput = [categories[0], categories[1], categories[2]];

        input.forEach((categoryId, index) => {
            expect(getCategoryById(categoryId).id).toEqual(expectedOutput[index].id);
        });
    });

    // negative test cases
    test('should return undefined when given an invalid category id', () => {
        const invalidCategoryId = 999;
        expect(getCategoryById(invalidCategoryId)).toBeUndefined();
    });

});
