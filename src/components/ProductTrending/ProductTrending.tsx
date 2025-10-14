import { COLORS } from "../../theme";
import type { Products } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";
import { MoveLeft, MoveRight } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

interface ProductTrendingProps {
    products: Products[];
}

export const ProductTrending = ({ products }: ProductTrendingProps) => {
    return (
        <section className="w-full mt-[95px]">
            <div className="text-center">
                <h2 className="text-[40px] font-medium mb-[14px]" style={{ color: COLORS.primary }}>
                    Shop Our Trending Items
                </h2>
                <img className="mx-auto mb-6" src="producthots/line1.jpeg" alt="" />
            </div>

            <div className="relative">
                {/* Custom navigation buttons */}
                <button className="swiper-button-prev absolute top-[48%] left-[6px] z-10  text-[#222] w-[50px] h-[50px] bg-white shadow-lg rounded-full border-[#DEDEDE] border-[1px] hover:border-[#444] flex items-center justify-center">
                    <MoveLeft className="!w-[20px] !h-[20px]" />
                </button>
                <button className="swiper-button-next absolute top-[48%] right-[6px] z-10  text-[#222] w-[50px] h-[50px] bg-white shadow-lg rounded-full border-[#DEDEDE] border-[1px] hover:border-[#444] flex items-center justify-center">
                    <MoveRight className="!w-[20px] !h-[20px]" />
                </button>

                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    spaceBetween={30}
                    pagination={{ el: ".custom-pagination", clickable: true }}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {products.map((p) => (
                        <SwiperSlide>
                            <ProductCard key={p.id} product={p} />
                        </SwiperSlide>
                    ))}

                    <div className="custom-pagination mt-5 text-center"></div>
                </Swiper>
            </div>
        </section>
    );
};
