import { getServiceName } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
    const firebase = jest.requireActual('../../src/data/firebase');
    return {
        firebase: {
            firestore: jest.fn(() => ({
                collection: jest.fn(() => ({
                    doc: jest.fn((id) => ({
                        get: jest.fn(() => {
                            if (id === 0) { // Caso donde se obtienen los datos correctos de un servicio existente
                                return Promise.resolve({
                                    exists: true,
                                    data: jest.fn(() => ({
                                        name: 'Cruz del Sur'
                                    }))
                                });
                            } else { // Caso donde se obtiene null para un servicio inexistente
                                return Promise.resolve({
                                    exists: false,
                                    data: jest.fn()
                                });
                            }
                        })
                    }))
                }))
            }))
        }
    };
});

describe('getServiceName', () => {
    it('debe devolver el nombre del servicio cuando existe en la base de datos', async () => {
        const serviceName = await getServiceName(0);
        expect(serviceName).toBe('Cruz del Sur');
    });

    it('debe devolver null cuando el servicio no existe en la base de datos', async () => {
        const serviceName = await getServiceName(1);
        expect(serviceName).toBeNull();
    });
});
