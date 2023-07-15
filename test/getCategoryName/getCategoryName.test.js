import { getCategoryName } from '../../src/data/handleFirebase';

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

    //test para cuando se pasa un valor negativo a categoriName
    test('should return undefined for negative category ID', () => {
        expect(getCategoryName(-1, categories)).toBeUndefined();
    });

    //test para verificar el comportamiento cuando no se proporciona ningun valor a categoriId
    test('should return undefined for no category ID', () => {
        expect(getCategoryName(undefined, categories)).toBeUndefined();
    });

});