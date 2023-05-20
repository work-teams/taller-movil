import { providers } from '../../src/data/dataArrays';

export function getAllProviders(idArray) {
    const providersArray = [];
    idArray.map(index => {
        providers.map(data => {
            if (data.providerId == index[0]) {
                providersArray.push([data, index[1]]);
            }
        });
    });
    return providersArray;
}
