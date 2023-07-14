import { findUserByUsernameAndPassword } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
    const actualFirebase = jest.requireActual('../../src/data/firebase');
    const firestoreMock = jest.fn().mockReturnValue({
        collection: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        get: jest.fn().mockImplementation(async () => {
            return {
                empty: false,
                docs: [
                    {
                        data: () => ({
                            password: 'admin',
                            username: 'admin'
                        })
                    }
                ]
            };
        })
    });

    return {
        firebase: {
            ...actualFirebase.firebase,
            firestore: firestoreMock
        }
    };
});

describe('findUserByUsernameAndPassword', () => {
    it('debe devolver los datos del usuario cuando el usuario existe en la base de datos', async () => {
        const userData = await findUserByUsernameAndPassword('admin', 'admin');
        expect(userData).toEqual({
            password: 'admin',
            username: 'admin'
        });
    });

    it('debe devolver null cuando el usuario no existe en la base de datos', async () => {
        // Modificamos la implementación de get para simular que no se encontraron usuarios
        firebase.firestore().collection().where().get.mockResolvedValue({
            empty: true,
            docs: []
        });

        const userData = await findUserByUsernameAndPassword('nonexistent', 'password');
        expect(userData).toBeNull();
    });
});
