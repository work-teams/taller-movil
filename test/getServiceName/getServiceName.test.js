import { getServiceName } from '../../src/data/handleFirebase';

describe('getServiceName', () => {
    const services = [
        { serviceId: 0, name: 'Cruz del Sur' },
        { serviceId: 1, name: 'LATAM Perú' },
        { serviceId: 2, name: 'Sonesta Hotel' }
    ];

    // positive test cases
    test('should return the name of the service when given a valid serviceID', () => {
        expect(getServiceName(0, services)).toBe('Cruz del Sur');
        expect(getServiceName(1, services)).toBe('LATAM Perú');
        expect(getServiceName(2, services)).toBe('Sonesta Hotel');
    });

    // negative test cases
    test('should return undefined when given an invalid serviceID', () => {
        expect(getServiceName(3, services)).toBeUndefined();
    });
});
