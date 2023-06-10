import { getProviderUrl } from '../../src/data/MockDataAPI';

describe('getProviderUrl', () => {
    const providers = [
        { providerId: 0, photo_url: 'https://example.com/provider1.jpg' },
        { providerId: 1, photo_url: 'https://example.com/provider2.jpg' },
        { providerId: 2, photo_url: 'https://example.com/provider3.jpg' }
    ];

    it('should return the photo url of the provider when given a valid providerID', () => {
        expect(getProviderUrl(0, providers)).toBe('https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png');
        expect(getProviderUrl(1, providers)).toBe('https://elcomercio.pe/resizer/0WL_qDGXSvtMc2ecM2xy62ZSEbM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/F33LKLQJBRHQREI2QPZWM3M6NQ.jpg');
        expect(getProviderUrl(2, providers)).toBe('https://media-cdn.tripadvisor.com/media/photo-s/1d/1e/58/1c/exterior.jpg');
    });

    it('should return undefined when given an invalid providerID', () => {
        expect(getProviderUrl(4, providers)).toBeUndefined();
    });
});
