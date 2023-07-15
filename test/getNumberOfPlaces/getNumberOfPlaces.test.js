import { getNumberOfPlaces } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
  const firebase = jest.requireActual('../../src/data/firebase');
  return {
    firebase: {
      firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
          get: jest.fn(() => Promise.resolve({
            forEach: jest.fn((callback) => {
              const data1 = { placeId: 0, categoryId: 0 };
              const data2 = { placeId: 1, categoryId: 1 };
              const data3 = { placeId: 2, categoryId: 0 };
              callback({ data: jest.fn(() => data1) });
              callback({ data: jest.fn(() => data2) });
              callback({ data: jest.fn(() => data3) });
            }),
          })),
        })),
      })),
    },
  };
});

describe('getNumberOfPlaces', () => {
  it('debe devolver el número correcto de lugares para una categoría existente', async () => {
    const count = await getNumberOfPlaces(0);
    expect(count).toBe(2);
  });

  it('debe devolver el número correcto de lugares para una categoría existente', async () => {
    const count = await getNumberOfPlaces(0);
    expect(count).toBe(2);
  });
});

