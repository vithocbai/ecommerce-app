import { Star, MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

export const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Harold Nguyen",
            country: "Syrian Arab Republic",
            avatar: "/testimonial/avatar1.jpeg",
            review: "As always a 5 star! I bought this theme the third or fourth time so far... really loving it. The new update from 6.0 is awesome.",
        },
        {
            id: 2,
            name: "Judith Mckinney",
            country: "Seychelles",
            avatar: "/testimonial/avatar2.jpeg",
            review: "This is by far the best theme on Themeforest. It adapts to a lot of the plugins, and their customer support is great. I really love this theme! Thanks 8theme.",
        },
    ];

    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev + 1 + testimonials.length) % testimonials.length);
    };

    const currentId = testimonials[current];
    return (
        <section
            className="flex items-center mt-[90px] max-xl:py-[50px] max-xl:px-[15px] px-[11%] min-h-[569px] w-full bg-no-repeat bg-center bg-cover"
            style={{ background: `url('/testimonial/bg01.jpeg')` }}
        >
            <div className="grid grid-cols-2 max-xl:grid-cols-1 items-start w-full">
                {/* Nội dụng bên trái */}
                <div className="w-full">
                    <div className="max-xl:max-w-full max-w-[443px]">
                        <span className="block text-[#444] text-[12px] mb-5 uppercase">Client’s Testimonials</span>
                        <h2 className="text[#222] max-md:text-[32px] text-[40px] font-medium mb-[10px]">
                            5K+ Satisfied Customers Let’s Look Reviews
                        </h2>
                        <div className="mb-[20px]">
                            <img src="/producthots/line1.jpeg" alt="" />
                        </div>
                        <p className="text-[#444] text-[18px] mb-10">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt
                            ut labore rem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </p>
                        <a href="" className="">
                            <span className="block max-xl:mb-[45px] text-[#2A74ED] text-[16px] after:text-[#2A74ED] after:content-['>'] after:ml-1">
                                View All Reviews
                            </span>
                        </a>
                    </div>
                </div>
                {/* Đánh giá nhận xét*/}
                <div className="w-full max-xl:ml-0">
                    <div className="flex max-xl:block">
                        <div className="ml-auto max-xl:mx-auto">
                            {/* Card */}
                            <article className="max-md:p-[25px] bg-white rounded-[20px] pt-[30px] pb-[40px] px-[40px] ">
                                <div className="flex max-md:block max-xl:max-w-full max-w-[491px] max-xl:ml-0 ml-auto">
                                    <img
                                        className="max-md:mx-auto w-[83px] h-[83px] object-cover rounded-full"
                                        src={currentId.avatar}
                                        alt=""
                                    />
                                    <div className="max-md:ml-0 ml-[30px]">
                                        <span className="max-md:mt-[15px] max-xl:max-w-full max-w-[337px] block text-[14px] italic leading-6 text-[#555] mb-[10px]">
                                            {currentId.review}
                                        </span>
                                        <div className="flex items-center mb-[10px]">
                                            {[...Array(5)].map((_, i) => {
                                                return (
                                                    <Star
                                                        key={i}
                                                        className="w-[16px] text-yellow-300 border-none outline-none"
                                                        fill={"#facc15"}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <div className="leading-6">
                                            <h3 className="block text-[16px] text-black font-[jost] font-medium uppercase leading-6">
                                                {currentId.name}
                                            </h3>
                                            <p className="text-[16px] text-[#888] font-[DM-sans] font-medium leading-6">
                                                {currentId.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* Xử lý chuyển card */}
                            <div className="mt-[30px] flex justify-center items-center">
                                <button
                                    onClick={handlePrev}
                                    className="flexCenter border-[1px] text-[#1A1A1A] border-[#E1E1E1] w-[50px] h-[50px] mx-[5px] object-cover rounded-full bg-white"
                                >
                                    <MoveLeft />
                                </button>
                                <button
                                    onClick={() => handleNext()}
                                    className="flexCenter border-[1px] text-[#1A1A1A] border-[#E1E1E1] w-[50px] h-[50px] mx-[5px] object-cover rounded-full bg-white "
                                >
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
