
export type shopProductProps = {
    id: number;
    title: string;
    image: string;
    star: number;
    brand?: string;
    oldPrice?: number;
    price: number;
};

export const shopProducts: shopProductProps[]= [
    {
        id: 1,
        image: "shopProduct/img1.jpeg",
        star: 5,
        title: "Amazon Echo Dot (3rd Gen) Smart",
        brand: "Brand 7",
        price: 805,
    },
    {
        id: 2,
        image: "shopProduct/img2.jpeg",
        star: 5,
        title: "Google – Nest Hello Smart Wi-Fi Video Doorbell",
        brand: "Brand 5",
        price: 1300,
    },
    {
        id: 3,
        image: "shopProduct/img3.jpeg",
        star: 5,
        title: "Hi-Resolution Bluetooth 4.0 Wireless Speakers",
        price: 320,
    },
    {
        id: 4,
        image: "shopProduct/img4.jpeg",
        star: 5,
        title: "Indoor/Outdoor Wire Free 1080p Security Camera",
        brand: "Brand 6",
        price: 540,
    },
    {
        id: 5,
        image: "shopProduct/img5.jpeg",
        star: 5,
        title: "Linksys – Velop AC2200 Band Mesh Wi-Fi System",
        brand: "Brand 4",
        oldPrice: 300,
        price: 175,
    },
    {
        id: 6,
        image: "shopProduct/img6.jpeg",
        star: 5,
        title: "Nest Learning Thermostat 3rd Gen in Stainless Steel",
        brand: "Brand 3",
        price: 520,
    },
    {
        id: 7,
        image: "shopProduct/img7.jpeg",
        star: 5,
        title: "Nest Mini Smart Speaker with Google Assistant",
        oldPrice: 300.0,
        price: 200.5,
    },
    {
        id: 8,
        image: "shopProduct/img8.jpeg",
        star: 5,
        title: "Nest Mini Smart Speaker with Google Assistant",
        brand: "Brand 2",
        oldPrice: 500.0,
        price: 435.5,
    },
    {
        id: 9,
        image: "shopProduct/img9.jpeg",
        star: 4,
        title: "Olufsen 17 Wireless Bluetooth Portable Speaker",
        oldPrice: 300.0,
        price: 275.5,
    },
    {
        id: 10,
        image: "shopProduct/img10.jpeg",
        star: 5,
        title: "SmartThing Indoor 1080p Bluetooth Headphones",
        price: 149.0,
    },
    {
        id: 11,
        image: "shopProduct/img11.jpeg",
        star: 5,
        title: "Google – Nest Hello Smart Wi-Fi Video Doorbell",
        brand: "Brand 5",
        price: 800.0,
    },
    {
        id: 12,
        image: "shopProduct/img12.jpeg",
        star: 5,
        title: "Special Editions Wireless Controller Lunar White",
        price: 639.0,
    },
];
