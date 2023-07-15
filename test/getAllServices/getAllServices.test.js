import { getAllServices } from '../../src/data/handleFirebase';
import { firebase } from '../../src/data/firebase';

jest.mock('../../src/data/firebase', () => {
  const firebase = jest.requireActual('../../src/data/firebase');
  return {
    firebase: {
      firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
          get: jest.fn(() => Promise.resolve({
            forEach: jest.fn((callback) => {
              const data1 = { serviceId: 0, name: 'Buses' };
              const data2 = { serviceId: 1, name: 'Aerolíneas' };
              const data3 = { serviceId: 2, name: 'Hoteles' };
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

describe('getAllServices', () => {

  it('debe devolver un array con los servicios correspondientes a los IDs dados', async () => {
    const services = await getAllServices([[0, 'Transporte'], [2, 'Hoteles']]);
    expect(services).toEqual([
      [{ serviceId: 0, name: 'Buses' }, 'Transporte'],
      [{ serviceId: 2, name: 'Hoteles' }, 'Hoteles'],
    ]);
  });

	it('debe devolver un array vacío si no hay servicios para los IDs dados', async () => {
		const services = await getAllServices([[3, 'Transporte']]);
		expect(services).toEqual([]);
	});

});