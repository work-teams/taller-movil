import { providers } from '../../src/data/dataArrays';

export function getProviderName(providerID) {
    let name;
    providers.map(data => {
        if (data.providerId == providerID) {
            name = data.name;
        }
    });
    return name;
}