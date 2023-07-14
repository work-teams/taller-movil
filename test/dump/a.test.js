import { getCategoryById } from '../../src/data/MockDataAPI';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
  const firebase = jest.requireActual('../../src/data/firebase');
  return {
    firebase: {
      firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
          doc: jest.fn((id) => ({
            get: jest.fn(() => {
              if (id === 0) { // Caso donde se obtienen datos correctos
                return {
                  exists: true,
                  data: jest.fn(() => ({
                    id: 0,
                    name: 'Costa',
                    photo_url: 'https://example.com/category-image.jpg'
                  }))
                };
              } else { // Caso donde se obtiene null
                return {
                  exists: false,
                  data: jest.fn()
                };
              }
            })
          }))
        }))
      }))
    }
  };
});

describe('getCategoryById', () => {
  it('debe devolver la categoría cuando existe en la base de datos', async () => {
    const category = await getCategoryById(0);
    expect(category).toEqual({
      id: 0,
      name: 'Costa',
      photo_url: 'https://example.com/category-image.jpg'
    });
  });

  it('debe devolver null cuando la categoría no existe en la base de datos', async () => {
    const category = await getCategoryById(1);
    expect(category).toBeNull();
  });
});
