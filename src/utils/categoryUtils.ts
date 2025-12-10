import { sampleCategory } from "../data/sampleCategory";
import { shopProducts } from "../data/shopProduct";
import type { Category } from "../types/category";

// Tự động tính số lượng products cho mỗi category
export function getCategoriesWithProductCount(): Category[] {
    const productCounts = shopProducts.reduce((acc, product) => {
        acc[product.categoryId] = (acc[product.categoryId] || 0) + 1;
        return acc;
    }, {} as Record<number, number>);

    return sampleCategory.map((category) => ({
        ...category,
        products: productCounts[category.id] || 0,
    }));
}
