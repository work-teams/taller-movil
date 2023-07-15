import {getCategoryName} from '../../src/data/handleFirebase';
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
                                        name: 'Costa'
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

//test para devolver el nombre del servicio cuando existe en la base de datos
describe('getCategoryName', () => {
    it('debe devolver el nombre del servicio cuando existe en la base de datos', async () => {
        const categoryName = await getCategoryName(0);
        expect(categoryName).toBe('Costa');
    });

//test para devolver indefinido cuando el servicio no existe en la base de datos
    it('debe devolver indefinido cuando el servicio no existe en la base de datos', async () => {
        const categoryName = await getCategoryName(3);
        expect(categoryName).toBeUndefined();
    });
});