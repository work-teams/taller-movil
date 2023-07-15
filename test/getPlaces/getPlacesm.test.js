import { getPlaces } from '../../src/data/handleFirebase';
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

describe('getPlaces', () => {
  const places = [
    { placeId: 0, categoryId: 0 },
    { placeId: 1, categoryId: 1 },
    { placeId: 2, categoryId: 0 },
  ];

  // positive test cases
  test('should return an array of places with the given categoryId', async () => {
    const input = [0, 1, 2];
    const expectedOutput = [
      places.filter((place) => place.categoryId === 0),
      places.filter((place) => place.categoryId === 1),
      places.filter((place) => place.categoryId === 2),
    ];

    input.forEach(async (categoryId, index) => {
      const places = await getPlaces(categoryId);
      expect(places).toEqual(expectedOutput[index]);
    });
  });

  // negative test cases
  test('should return an empty array when given an invalid categoryId', async () => {
    const invalidCategoryId = 999;
    const places = await getPlaces(invalidCategoryId);
    expect(places).toEqual([]);
  });
});
