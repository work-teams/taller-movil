import { getServiceUrl } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
    const firebase = jest.requireActual('../../src/data/firebase');
    return {
        firebase: {
            firestore: jest.fn(() => ({
                collection: jest.fn(() => ({
                    doc: jest.fn((serviceId) => ({
                        get: jest.fn(() => {
                            if (serviceId === 0) { // Caso donde se obtiene la URL de la foto de un servicio existente
                                return Promise.resolve({
                                    exists: true,
                                    data: jest.fn(() => ({
                                        photo_url: 'https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png'
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

describe('getServiceUrl', () => {
    it('debe devolver la URL de la foto cuando el servicio existe en la base de datos', async () => {
        const photoUrl = await getServiceUrl(0);
        expect(photoUrl).toBe('https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png');
    });

    it('debe devolver null cuando el servicio no existe en la base de datos', async () => {
        const photoUrl = await getServiceUrl(1);
        expect(photoUrl).toBeNull();
    });
});
