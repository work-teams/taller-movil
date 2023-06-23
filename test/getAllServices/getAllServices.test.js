import { getAllServices } from '../../src/data/MockDataAPI';

describe('getAllServices', () => {
    const services = [
        { serviceId: 0, name: 'Cruz del Sur', photo_url: 'https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png' },
        { serviceId: 1, name: 'LATAM Perú', photo_url: 'https://elcomercio.pe/resizer/0WL_qDGXSvtMc2ecM2xy62ZSEbM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/F33LKLQJBRHQREI2QPZWM3M6NQ.jpg' },
        { serviceId: 2, name: 'Sonesta Hotel', photo_url: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1e/58/1c/exterior.jpg' }
    ];

    // positive test cases
    it('should return an array of services with their corresponding IDs when given a valid array of IDs', () => {
        const idArray = [[0, 'id1'], [1, 'id2']];
        const expectedServices = [
            [{ serviceId: 0, name: 'Cruz del Sur', photo_url: 'https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png', description: 'Empresa de transporte terrestre interprovinsional' }, 'id1'],
            [{ serviceId: 1, name: 'LATAM Perú', photo_url: 'https://elcomercio.pe/resizer/0WL_qDGXSvtMc2ecM2xy62ZSEbM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/F33LKLQJBRHQREI2QPZWM3M6NQ.jpg', description: 'Aerolínea a nivel nacional' }, 'id2']
        ];

        const result = getAllServices(idArray);

        expect(result).toEqual(expectedServices);
    });

    // negative test cases
    it('should return an empty array when given an array of invalid IDs', () => {
        const idArray = [[4, 'data3'], [5, 'data4']];

        const result = getAllServices(idArray);

        expect(result).toEqual([]);
    });
});
