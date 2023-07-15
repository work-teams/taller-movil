import { getCategoryName } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
    const firebase = jest.requireActual('../../src/data/firebase');
    return {
        firebase: {
            firestore: jest.fn(() => ({
                collection: jest.fn(() => ({
                    doc: jest.fn((categoryId) => ({
                        get: jest.fn(() => {
                            if (categoryId === '0') { // Caso positivo
                                return Promise.resolve({
                                    exists: true,
                                    data: () => ({
                                        id: '0',
                                        name: 'Costa',
                                        photo_url: 'https://img.womondoo.com/insecure/size:1920:::/plain/https://media.womondoo.com/media/images/Playa_Roja.max-1350x1080.format-webp-lossless_bpDjGxK.webp'
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

describe('getCategoryName', () => {
    it('debe devolver el nombre de la categoría cuando la categoría existe en la base de datos', async () => {
        const categoryName = await getCategoryName('0');
        expect(categoryName).toBe('Costa');
    });

    it('debe devolver null cuando la categoría no existe en la base de datos', async () => {
        const categoryName = await getCategoryName('1');
        expect(categoryName).toBeNull();
    });
});