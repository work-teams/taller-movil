import { insertUser } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
    const firebase = jest.requireActual('../../src/data/firebase');
    return {
        firebase: {
            firestore: jest.fn(() => ({
                collection: jest.fn(() => ({
                    add: jest.fn((data) => {
                        if (data.username === 'admin' && data.password === 'admin') { // Caso positivo
                            return Promise.resolve({ id: '123' });
                        } else { // Caso negativo
                            return Promise.reject(new Error('Error al insertar usuario'));
                        }
                    })
                }))
            }))
        }
    };
});

describe('insertUser', () => {
    it('debe devolver el ID del nuevo usuario cuando se inserta correctamente', async () => {
        const userId = await insertUser('admin', 'admin');
        expect(userId).toBe('123');
    });

    it('debe devolver null cuando ocurre un error al insertar el usuario', async () => {
        const userId = await insertUser('invalid', 'password');
        expect(userId).toBeNull();
    });
});
