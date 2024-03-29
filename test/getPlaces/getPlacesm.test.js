import { getPlaces } from '../../src/data/handleFirebase';
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
                    placeId: '0',
                    categoryId: '0',
                    title: 'Ciudadela de Caral',
                    photo_url: 'https://historia.nationalgeographic.com.es/medio/2019/10/24/edificio-piramidal-visto-desde-un-dronse-conservan-seis-piramides-cada-una-de-ellas-con-una-escalera-central-orientada-hacia-determinadas-estrellas_27a7675b_1280x959.jpg',
                    photosArray: [
                      'https://historia.nationalgeographic.com.es/medio/2019/10/24/edificio-piramidal-visto-desde-un-dronse-conservan-seis-piramides-cada-una-de-ellas-con-una-escalera-central-orientada-hacia-determinadas-estrellas_27a7675b_1280x959.jpg',
                      'https://catedraunesco.usmp.edu.pe/wp-content/uploads/2018/08/4-caral.jpg'
                    ],
                    location: 'Lima',
                    services: [
                      [0, 'Buses'],
                      [1, 'Aerolíneas'],
                      [2, 'Hoteles'],
                    ],
                    description: '-- La Ciudad Sagrada de Caral representa el origen de la cultura andina y es la civilización más antigua de América, con más de 5.000 años de historia donde la UNESCO la declaró como Patrimonio Cultural de la Humanidad, el complejo está formado por varias construcciones, entre las que resaltan seis pirámides y sus plazas circulares. Por los instrumentos y restos encontrados se conoce que sus habitantes se dedicaron principalmente a la pesca y agricultura.\n\n -- Se ubica a 206 km al noroeste de Lima (4 horas en auto aproximadamente).'
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

describe('getPlaces', () => {
  it('debe devolver los datos del lugar cuando el lugar existe en la base de datos', async () => {
    const placeData = await getPlaces('0');
    expect(placeData).toEqual({
      placeId: '0',
      categoryId: '0',
      title: 'Ciudadela de Caral',
      photo_url: 'https://historia.nationalgeographic.com.es/medio/2019/10/24/edificio-piramidal-visto-desde-un-dronse-conservan-seis-piramides-cada-una-de-ellas-con-una-escalera-central-orientada-hacia-determinadas-estrellas_27a7675b_1280x959.jpg',
      photosArray: [
        'https://historia.nationalgeographic.com.es/medio/2019/10/24/edificio-piramidal-visto-desde-un-dronse-conservan-seis-piramides-cada-una-de-ellas-con-una-escalera-central-orientada-hacia-determinadas-estrellas_27a7675b_1280x959.jpg',
        'https://catedraunesco.usmp.edu.pe/wp-content/uploads/2018/08/4-caral.jpg'
      ],
      location: 'Lima',
      services: [
        [0, 'Buses'],
        [1, 'Aerolíneas'],
        [2, 'Hoteles'],
      ],
      description: '-- La Ciudad Sagrada de Caral representa el origen de la cultura andina y es la civilización más antigua de América, con más de 5.000 años de historia donde la UNESCO la declaró como Patrimonio Cultural de la Humanidad, el complejo está formado por varias construcciones, entre las que resaltan seis pirámides y sus plazas circulares. Por los instrumentos y restos encontrados se conoce que sus habitantes se dedicaron principalmente a la pesca y agricultura.\n\n -- Se ubica a 206 km al noroeste de Lima (4 horas en auto aproximadamente).'
    });
  });

  it('debe devolver null cuando el lugar no existe en la base de datos', async () => {
    const placeData = await getPlaces('1');
    expect(placeData).toBeNull();
  });
});