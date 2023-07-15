import { getPlacesByService } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
  const firebase = jest.requireActual('../../src/data/firebase');
  return {
    firebase: {
      firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
          get: jest.fn(() => Promise.resolve({
            forEach: jest.fn((callback) => {
              const data1 = {
                placeId: 0,
                name: 'Place 1',
                services: [{ 0: 'Buses', 1: 'Aerolíneas' }]
              };
              const data2 = {
                placeId: 1,
                name: 'Place 2',
                services: [{ 1: 'Aerolíneas', 2: 'Hoteles' }]
              };
              const data3 = {
                placeId: 2,
                name: 'Place 3',
                services: [{ 0: 'Buses', 2: 'Hoteles' }]
              };
              callback({
                data: jest.fn(() => data1),
              });
              callback({
                data: jest.fn(() => data2),
              });
              callback({
                data: jest.fn(() => data3),
              });
            }),
          })),
        })),
      })),
    },
  };
});

describe('getPlacesByService', () => {

  it('debe devolver un array con los lugares que tienen el servicio dado', async () => {
    const places = await getPlacesByService(1);
    expect(places).toEqual([
      {
        placeId: 0,
        name: 'Place 1',
        services: [{ 0: 'Buses', 1: 'Aerolíneas' }]
      },
      {
        placeId: 1,
        name: 'Place 2',
        services: [{ 1: 'Aerolíneas', 2: 'Hoteles' }]
      },
    ]);
  });

  it('debe devolver un array vacío si no hay lugares con el servicio dado', async () => {
    const places = await getPlacesByService(3);
    expect(places).toEqual([]);
  });
});
