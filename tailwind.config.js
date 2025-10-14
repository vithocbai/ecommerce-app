/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: ["swiper-pagination", "swiper  -pagination-bullet", "swiper-pagination-bullet-active"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-banner": "url('/banner/banner.jpeg')",
            },
        },
    },
    plugins: [],
    important: true,
};
