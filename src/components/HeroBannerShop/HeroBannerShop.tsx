import TypewriterLoop from "../TypewriterLoop/TypewriterLoop";

export const HeroBannerShop = () => {
    return (
        <section>
            <div
                className="pt-[85px] pb-[65px] bg-cover bg-center rounded-[20px]"
                style={{ backgroundImage: "url('./heroBannerShop/banner.jpeg')" }}
            >
                <div className="p-[15px] m-0 mr-[5%] ml-[15%] ">
                    <h4 className="text-[12px] text-[#444] uppercase tracking-[3px] mb-[10px]">
                        Save upto 30% discount on
                    </h4>
                    <h2 className="mb-[10px] text-[40px] max-lg:text-[32px] text-[#222] font-medium lg:whitespace-nowrap">
                        <span className="mr-2">Smart Home</span>
                        <TypewriterLoop
                            texts={["Appliances", "Devices"]}
                            typeSpeed={80}
                            pauseTime={1500}
                            className="text-[40px] max-lg:text-[32px] text-[#222] font-medium lg:whitespace-nowrap"
                            cursorClassName="inline-block w-1 h-10 bg-blue-500 ml-1 animate-pulse"
                        />
                    </h2>
                    <div className="">
                        <button className="flexCenter gap-[5px] px-[38px] h-[46px] text-[16px] font-medium rounded-full text-white bg-[#2A74ED] hover:bg-[#222222] transition-all duration-200 ease-linear">
                            <span> Buy Product Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
