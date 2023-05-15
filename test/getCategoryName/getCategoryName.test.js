import { getCategoryName } from './getCategoryName';

describe('getCategoryName', () => {
    const categories = [
        { id: 0, name: 'Costa' },
        { id: 1, name: 'Sierra' },
        { id: 2, name: 'Selva' },
    ];

    test('should return correct category names', () => {
        expect(getCategoryName(0, categories)).toBe('Costa');
        expect(getCategoryName(1, categories)).toBe('Sierra');
        expect(getCategoryName(2, categories)).toBe('Selva');
    });

    test('should return undefined for invalid category ID', () => {
        expect(getCategoryName(3, categories)).toBeUndefined();
    });
});