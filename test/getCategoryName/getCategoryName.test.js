import { getCategoryName } from '../../src/data/MockDataAPI';

describe('getCategoryName', () => {
    const categories = [
        { id: 0, name: 'Costa' },
        { id: 1, name: 'Sierra' },
        { id: 2, name: 'Selva' },
    ];

    // positive test cases
    test('should return correct category names', () => {
        expect(getCategoryName(0, categories)).toBe('Costa');
        expect(getCategoryName(1, categories)).toBe('Sierra');
        expect(getCategoryName(2, categories)).toBe('Selva');
    });

    // negative test cases
    test('should return undefined for invalid category ID', () => {
        expect(getCategoryName(3, categories)).toBeUndefined();
    });
});