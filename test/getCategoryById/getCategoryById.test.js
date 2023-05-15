import { getCategoryById } from './getCategoryById';
import { categories } from '../../src/data/dataArrays';

describe('getCategoryById', () => {
    it('should return the category with the given id', () => {
        const input = [0, 1, 2];
        const expectedOutput = [categories[0], categories[1], categories[2]];

        input.forEach((categoryId, index) => {
            expect(getCategoryById(categoryId).id).toEqual(expectedOutput[index].id);
        });
    });
});
