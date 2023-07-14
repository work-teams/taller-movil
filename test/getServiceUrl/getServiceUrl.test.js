import { getServiceUrl } from '../../src/data/handleFirebase';

describe('getServiceUrl', () => {
    const services = [
        { serviceId: 0, photo_url: 'https://example.com/service1.jpg' },
        { serviceId: 1, photo_url: 'https://example.com/service2.jpg' },
        { serviceId: 2, photo_url: 'https://example.com/service3.jpg' }
    ];

    // positive test cases
    test('should return the photo url of the service when given a valid serviceID', () => {
        expect(getServiceUrl(0, services)).toBe('https://images.ctfassets.net/1nvpgv2kdfc0/1kqJ26hOIgs5ltRX21DURK/8764ce9a5c4f943c1006795ea2dac0bf/Cruz_del_Sur_bus.png');
        expect(getServiceUrl(1, services)).toBe('https://elcomercio.pe/resizer/0WL_qDGXSvtMc2ecM2xy62ZSEbM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/F33LKLQJBRHQREI2QPZWM3M6NQ.jpg');
        expect(getServiceUrl(2, services)).toBe('https://media-cdn.tripadvisor.com/media/photo-s/1d/1e/58/1c/exterior.jpg');
    });

    // negative test cases
    test('should return undefined when given an invalid serviceID', () => {
        expect(getServiceUrl(4, services)).toBeUndefined();
    });
});
