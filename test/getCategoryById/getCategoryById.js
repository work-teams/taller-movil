import { categories } from '../../src/data/dataArrays';

export function getCategoryById(categoryId) {
    let category;
    categories.map(data => {
        if (data.id == categoryId) {
            category = data;
        }
    });
    return category;
}
