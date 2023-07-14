import { getServiceDescription } from '../../src/data/MockDataAPI';

describe('getServiceDescription', () => {
    const services = [
        { serviceId: 0, description: 'Empresa de transporte terrestre interprovinsional' },
        { serviceId: 1, description: 'Aerolínea a nivel nacional' },
        { serviceId: 2, description: 'Red de hoteles a nivel nacional' }
    ];

    // positive test cases
    test('should return the name of the service when given a valid serviceID', () => {
        expect(getServiceDescription(0, services)).toBe('Empresa de transporte terrestre interprovinsional');
        expect(getServiceDescription(1, services)).toBe('Aerolínea a nivel nacional');
        expect(getServiceDescription(2, services)).toBe('Red de hoteles a nivel nacional');
    });

    // negative test cases
    test('should return undefined when given an invalid serviceID', () => {
        expect(getServiceDescription(3, services)).toBeUndefined();
    });

    //test para verificar el comportamiento cuando se pasa un valor negativo
    test('should return undefined when given a negative serviceID', () => {
        expect(getServiceDescription(-1, services)).toBeUndefined();
    });

    //test para verificar el comportamiento cuando no se proporciona ningun valor para services
    test('should return undefined when no serviceID is provided', () => {
        expect(getServiceDescription(undefined, services)).toBeUndefined();
    });     

});
