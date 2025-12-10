import type { Category } from "../types/category";

export const sampleCategory: Omit<Category, 'products'>[]= [
    {
        id: 1,
        name: "Computer & PC",
        image: "/category/img1.jpeg",
    },
    {
        id: 2,
        name: "Smart Gadgets",
        image: "/category/img2.jpeg",
    },
    {
        id: 3,
        name: "TV & Monitors",
        image: "/category/img3.jpeg",
    },
    {
        id: 4,
        name: "Wearable Items",
        image: "/category/img4.jpeg",
    },
];
