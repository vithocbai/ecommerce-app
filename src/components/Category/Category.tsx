import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { sampleCategory } from "../../data/sampleCategory";


const CategoriesSection = () => {
    const loopCategories = [...sampleCategory, ...sampleCategory];

    return (
        <section className="relative w-full mt-[30px]">
            {/* Custom navigation buttons */}
            <button className="swiper-button-prev absolute left-[-5px] z-10  text-[#DEDEDE] w-[40px] h-[40px] bg-white rounded-full border-[#DEDEDE] border-[1px] flex items-center justify-center">
                <MoveLeft className="!w-[20px] !h-[20px]" />
            </button>
            <button className="swiper-button-next absolute right-[-5px] z-10  text-[#DEDEDE] w-[40px] h-[40px] bg-white rounded-full border-[#DEDEDE] border-[1px] flex items-center justify-center">
                <MoveRight className="!w-[20px] !h-[20px]" />
            </button>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={4}
                slidesPerGroup={1}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className="h-[100%]"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {loopCategories.map((category, id) => (
                    <SwiperSlide key={id}>
                        <a className="relative w-[100%] rounded-[20px] select-none hover:shadow-xl " href="#!">
                            <div className="absolute mx-auto top-0 px-[15px] py-[50px] w-full">
                                <h2 className="text-center text-[26px] text-[#222] font-medium mb-[3px]">
                                    {category.name}
                                </h2>
                                <p className="text-center font-normal text-[12px] text-[#7b7979] uppercase leading-[1.3] py-[3px]">
                                    {category.products} Products
                                </p>
                            </div>
                            <img
                                className="w-full h-[100%] z-[-1] object-cover object-center "
                                src={category.image}
                                alt={category.name}
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default CategoriesSection;
