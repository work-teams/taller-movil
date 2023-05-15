import { categories } from '../../src/data/dataArrays';

export function getCategoryName(categoryId) {
    let name;
    categories.map(data => {
        if (data.id == categoryId) {
            name = data.name;
        }
    });
    return name;
}
