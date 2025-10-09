import Hotspot from "./Hotspot";

const ProductHotspotSection = () => {
    const hotspots = [
        {
            top: "60%",
            left: "13%",
            cardPosition: "center-left" as const,
            product: {
                title: "Nest Mini Smart Speaker with Google Assistant",
                image: "producthots/hotspot1.jpeg",
                star: 5,
                oldPrice: 300,
                newPrice: 200,
            },
        },
        {
            top: "8%",
            left: "35%",
            cardPosition: "top-left" as const,
            product: {
                title: "Amazon Echo Dot (3rd Gen) Smart",
                image: "producthots/hotspot1.jpeg",
                star: 5,
                oldPrice: 805,
            },
        },
        {
            top: "40%",
            left: "70%",
            cardPosition: "center-right" as const,
            product: {
                title: "Google – Nest Hello Smart Wi-Fi Video Doorbell",
                image: "producthots/hotspot1.jpeg",
                star: 5,
                oldPrice: 1300,
            },
        },
        {
            top: "80%",
            left: "78%",
            cardPosition: "bottom-right" as const,
            product: {
                title: "Nest Mini Smart Speaker with Google Assistant",
                image: "producthots/hotspot1.jpeg",
                star: 5,
                oldPrice: 500.0,
                newPrice: 435.5,
            },
        },
    ];

    return (
        <section className="max-md:block flexCenter max-md:mt-[60px] mt-[110px]">
            {/* Image */}
            <div className="relative max-md:w-full w-[50%] max-md:pr-0 pr-[15px]">
                <img className="w-full object-cover" src="/producthots/img1.jpeg" alt="" />

                {/* Hotspot */}
                {hotspots.map((hotspot, i) => {
                    return <Hotspot key={i} {...hotspot} />;
                })}
            </div>

            {/* Content */}
            <div className="max-md:w-full max-md:mt-[50px] w-[50%]">
                <div className="max-md:mx-0 mx-[15%] max-lg:mx-[5%] h-full my-auto ">
                    <h3 className="uppercase text-[12px] text-[#222] mb-[20px] tracking-[2px]">
                        XStore Elementor Minimal Electronics Demo
                    </h3>
                    <h2 className="max-lg:text-[32px] text-[40px] text-[#222] font-medium">
                        Lookout Smart products here, there, everywhere.
                    </h2>
                    <div className="mb-[20px]">
                        <img src="/producthots/line1.jpeg" alt="" />
                    </div>
                    <p className="text-[18px] text-[#444] mb-[20px]">
                        Save when you shop the Best Buy Outlet for clearance, open-box, refurbished and pre-owned items
                        save more with coupons and 70% off. Super value deals 2022.
                    </p>

                    <button className="relative overflow-hidden group bg-[#0071e3] text-white rounded-full w-[219px] h-[54px] text-[18px] font-medium">
                        <span className="absolute bg-black inset-0 translate-y-full transition-transform duration-300 ease-linear group-hover:translate-y-0"></span>
                        <span className="relative z-10">View All Products</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductHotspotSection;
