import { getServiceDescription } from '../../src/data/handleFirebase';
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
                                        description: 'Empresa de transporte terrestre interporvinsional'
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

describe('getServiceDescription', () => {
    it('debe devolver la descripcion del servicio cuando existe en la base de datos', async () => {
        const serviceDescription = await getServiceDescription(0);
        expect(serviceDescription).toBe('Empresa de transporte terrestre interprovinsional');
    });
    it('debe devolver null cuando el servicio no existe en la base de datos', async () => {
        const serviceDescription = await getServiceDescription(3);
        expect(serviceDescription).toBeUndefined();
    });
});