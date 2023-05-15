import { places } from '../../src/data/dataArrays';

export function getPlacesByPlaceName(placeName) {
    const nameUpper = placeName.toUpperCase();
    const placesArray = [];
    places.map(data => {
        if (data.title.toUpperCase().includes(nameUpper)) {
            placesArray.push(data);
        }
    });
    return placesArray;
}