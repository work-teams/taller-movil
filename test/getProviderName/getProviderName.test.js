const { getProviderName } = require('../../src/data/MockDataAPI');

describe('getProviderName', () => {
    const providers = [
        { providerId: 0, name: 'Cruz del Sur' },
        { providerId: 1, name: 'LATAM Perú' },
        { providerId: 2, name: 'Sonesta Hotel' }
    ];

    it('should return the name of the provider when given a valid providerID', () => {
        expect(getProviderName(0, providers)).toBe('Cruz del Sur');
        expect(getProviderName(1, providers)).toBe('LATAM Perú');
        expect(getProviderName(2, providers)).toBe('Sonesta Hotel');
    });

    it('should return undefined when given an invalid providerID', () => {
        expect(getProviderName(3, providers)).toBeUndefined();
    });
});
