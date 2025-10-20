import type { PopularArticle } from "../../types/PopularArticle";
import { ArrowRight, CalendarRange, MessageSquare, Share2, MoveLeft, MoveRight } from "lucide-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

interface PopularArticlesProp {
    poppularArticles: PopularArticle[];
}

export const PopularArticles = ({ poppularArticles }: PopularArticlesProp) => {
    return (
        <section className="mt-[115px] max-lg:mt-[60px]">
            <div>
                {/* Phần đầu giới thiệu */}
                <div className="text-center">
                    <h2 className="text-[40px] max-lg:text-[32px] text-[#222] font-medium mb-[10px]">
                        Top Popular Articals
                    </h2>
                    <img className="mx-auto py-3 mb-5" src="producthots/line1.jpeg" alt="" />
                </div>
                {/* Swiper */}
                <div className="relative group/slider">
                    {/* Custom navigation buttons */}
                    <button className="swiper-button-prev absolute top-[48%] left-[6px] z-10 opacity-0 invisible group-hover/slider:visible group-hover/slider:opacity-100 text-[#222] w-[50px] h-[50px] bg-white shadow-lg rounded-full border-[#DEDEDE] border-[1px] hover:border-[#444] flex items-center justify-center">
                        <MoveLeft className="!w-[20px] !h-[20px]" />
                    </button>
                    <button className="swiper-button-next absolute top-[48%] right-[6px] z-10 opacity-0 invisible group-hover/slider:visible group-hover/slider:opacity-100  text-[#222] w-[50px] h-[50px] bg-white shadow-lg rounded-full border-[#DEDEDE] border-[1px] hover:border-[#444] flex items-center justify-center">
                        <MoveRight className="!w-[20px] !h-[20px]" />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={3}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {poppularArticles.map((poppularArticle, index) => (
                            <SwiperSlide key={index}>
                                <article>
                                    {/* Image */}
                                    <div className="relative mb-5 rounded-[20px] overflow-hidden group">
                                        <img
                                            className="w-full object-cover rounded-[20px] group-hover:scale-110 duration-300 ease-linear"
                                            src={poppularArticle.image}
                                            alt=""
                                        />
                                        {/* Ngày tháng */}
                                        <div className="absolute top-3 left-3 flexCenter flex-col w-[54px] h-[54px] bg-white rounded-full">
                                            {/* Thêm tiền tố  */}
                                            {poppularArticle.date.day < 10 ? (
                                                <span className="text-[#222] text-[24px] font-medium leading-[1]">
                                                    0{poppularArticle.date.day}
                                                </span>
                                            ) : (
                                                <span className="text-[#222] text-[24px] font-medium leading-[1]">
                                                    {poppularArticle.date.day}
                                                </span>
                                            )}
                                            <span className="text-[#222] text-[14px] leading-[1]">
                                                {poppularArticle.date.month}
                                            </span>
                                        </div>
                                        {/* Danh mục */}
                                        <div className="absolute bottom-2 left-2 flex gap-1">
                                            {poppularArticle.category.split(",").map((cat, i) => {
                                                return (
                                                    <span
                                                        key={i}
                                                        className="leading-[1] bg-[#5B565A] text-white p-[6px] text-[12px] rounded-[4px]"
                                                    >
                                                        {cat}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/* Footer */}
                                    <div className="hover:cursor-w-resize">
                                        <h3 className="text-[#222] text-[18px] font-medium leading-[30px]">
                                            <a href="">{poppularArticle.title}</a>
                                        </h3>
                                        <div className="relative inline-block group">
                                            <a className=" flex text-[14px] text-[#2A74ED]" href="">
                                                <span className="mr-[5px]">Continue Reading </span>
                                                <span>
                                                    <ArrowRight className="w-[22px] h-auto" strokeWidth={0.75} />
                                                </span>
                                                <span className="absolute bottom-0 left-0 w-[99%] h-[1.2px] bg-[#2A74ED] scale-x-0 origin-right transition-transform duration-300 ease-linear group-hover:scale-x-100 group-hover:origin-left"></span>
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-between mt-[15px] border-t-[1px] border-[#e1e1e1] color-[#888] py-[10px]">
                                            {/* footer left */}
                                            <h5 className="flex items-center">
                                                <div className="flex items-center">
                                                    <img
                                                        className="max-w-[20px] rounded-full"
                                                        src="./popularArticle/avatar.jpg"
                                                        alt=""
                                                    />
                                                    <span className="ml-[5px] text-[12px] text-[#888]">by</span>
                                                </div>
                                                <a className="ml-[5px] text-[12px] text-[#222]" href="">
                                                    <span>{poppularArticle.author}</span>
                                                </a>
                                            </h5>
                                            {/* Footer right */}
                                            <div className="flex items-center gap-3">
                                                <a className="flex items-center text-[#222] text-[12px]" href="">
                                                    <CalendarRange
                                                        className={"w-[14px] mr-[3px] block"}
                                                        strokeWidth={1.5}
                                                    />
                                                    <span>{poppularArticle.time}</span>
                                                </a>
                                                <a className="flex items-center text-[#222] text-[12px]" href="">
                                                    <span>
                                                        <MessageSquare className={"w-[14px]"} strokeWidth={1.2} />
                                                    </span>
                                                    <span className="text-[#222] text-[12px]">
                                                        {poppularArticle.commentCount}
                                                    </span>
                                                </a>
                                                <a href="">
                                                    <Share2 className={"w-[14px]"} strokeWidth={1.2} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
