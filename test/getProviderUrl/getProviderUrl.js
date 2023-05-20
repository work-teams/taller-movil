import { providers } from '../../src/data/dataArrays';

export function getProviderUrl(providerID) {
    let url;
    providers.map(data => {
        if (data.providerId == providerID) {
            url = data.photo_url;
        }
    });
    return url;
}
