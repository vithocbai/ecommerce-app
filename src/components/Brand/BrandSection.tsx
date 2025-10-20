"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function BrandSection() {
    const brands = [
        "/brand/brand7.jpeg",
        "/brand/brand1.jpeg",
        "/brand/brand2.jpeg",
        "/brand/brand3.jpeg",
        "/brand/brand4.jpeg",
        "/brand/brand5.jpeg",
        "/brand/brand6.jpeg",
    ];
    // laptop 6 - tablet 3
    const [isTablet, setIsTablet] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className="mt-[60px]">
            {isTablet ? (
                <Swiper
                    slidesPerView={4}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        567: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {brands.map((brand, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img
                                    className="w-full object-cover hover:opacity-80 transition-all duration-300"
                                    src={brand}
                                    alt=""
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            ) : (
                <div className="grid grid-cols-6 gap-0">
                    {brands.slice(0, 6).map((brand, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img
                                    className="w-full object-cover hover:opacity-80 transition-all duration-300"
                                    src={brand}
                                    alt=""
                                />
                            </SwiperSlide>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
