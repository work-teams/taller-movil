import { getServiceDescription } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
    const firebase = jest.requireActual('../../src/data/firebase');
    return {
        firebase: {
            firestore: jest.fn(() => ({
                collection: jest.fn(() => ({
                    doc: jest.fn((serviceId) => ({
                        get: jest.fn(() => {
                            if (serviceId === '0') { // Caso positivo
                                return Promise.resolve({
                                    exists: true,
                                    data: () => ({
                                        serviceId: '0',
                                        name: 'Cruz del Sur',
                                        photo_url: 'https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png',
                                        description: 'Empresa de transporte terrestre interprovinsional'
                                    })
                                });
                            } else { // Caso negativo
                                return Promise.resolve({
                                    exists: false
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
    it('debe devolver la descripción del servicio cuando el servicio existe en la base de datos', async () => {
        const serviceDescription = await getServiceDescription('0');
        expect(serviceDescription).toBe('Empresa de transporte terrestre interprovinsional');
    });

    it('debe devolver null cuando el servicio no existe en la base de datos', async () => {
        const serviceDescription = await getServiceDescription('1');
        expect(serviceDescription).toBeNull();
    });
});