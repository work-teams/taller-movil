import { getAllProviders } from '../../src/data/MockDataAPI';

describe('getAllProviders', () => {
    const providers = [
        { providerId: 0, name: 'Cruz del Sur', photo_url: 'https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png' },
        { providerId: 1, name: 'LATAM Perú', photo_url: 'https://elcomercio.pe/resizer/0WL_qDGXSvtMc2ecM2xy62ZSEbM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/F33LKLQJBRHQREI2QPZWM3M6NQ.jpg' },
        { providerId: 2, name: 'Sonesta Hotel', photo_url: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/1e/58/1c/exterior.jpg' }
    ];

    // positive test cases
    it('should return an array of providers with their corresponding IDs when given a valid array of IDs', () => {
        const idArray = [[0, 'id1'], [1, 'id2']];
        const expectedProviders = [
            [{ providerId: 0, name: 'Cruz del Sur', photo_url: 'https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png' }, 'id1'],
            [{ providerId: 1, name: 'LATAM Perú', photo_url: 'https://elcomercio.pe/resizer/0WL_qDGXSvtMc2ecM2xy62ZSEbM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/F33LKLQJBRHQREI2QPZWM3M6NQ.jpg' }, 'id2']
        ];

        const result = getAllProviders(idArray);

        expect(result).toEqual(expectedProviders);
    });

    // negative test cases
    it('should return an empty array when given an array of invalid IDs', () => {
        const idArray = [[4, 'data3'], [5, 'data4']];

        const result = getAllProviders(idArray);

        expect(result).toEqual([]);
    });
});
