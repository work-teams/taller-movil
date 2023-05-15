import { places } from '../../src/data/dataArrays';

export function getPlaces(categoryId) {
    const placesArray = [];
    places.map(data => {
        if (data.categoryId == categoryId) {
            placesArray.push(data);
        }
    });
    return placesArray;
}