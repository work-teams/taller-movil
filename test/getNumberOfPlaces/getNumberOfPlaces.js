import { places } from '../../src/data/dataArrays';

export function getNumberOfPlaces(categoryId) {
    let count = 0;
    places.map(data => {
        if (data.categoryId == categoryId) {
            count++;
        }
    });
    return count;
}
