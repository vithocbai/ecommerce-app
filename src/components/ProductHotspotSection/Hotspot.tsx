import { Plus } from "lucide-react";

interface HotspotProps {
    top: string;
    left: string;
    cardPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "center-left" | "center-right";
    product: {
        title: string;
        image: string;
        star: number;
        oldPrice: number;
        newPrice?: number;
    };
}

const Hotspot: React.FC<HotspotProps> = ({ top, left, cardPosition = "top-left", product }) => {
    // Hiển thị Star
    const renderStar = (rating: number) => {
        const totalStar = 5;
        const star = [];
        for (let i = 0; i < totalStar; i++) {
            const isFilter = i < rating;
            star.push(
                <span key={i} className={`${isFilter ? "text-yellow-300" : "text-gray-300"}`}>
                    ★
                </span>
            );
        }
        return star;
    };

    // Xác định vị trí và hướng mũi tên của card
    const getCardPosition = () => {
        switch (cardPosition) {
            case "top-left":
                return {
                    cardClass: "top-[40px] -left-[118px]",
                    arrowClass: "top-[-6px] left-[46%]",
                };
            case "top-right":
                return {
                    cardClass: "top-[10px] right-[0px]",
                    arrowClass: "top-[0] right-[50%]",
                };
            case "bottom-left":
                return {
                    cardClass: "bottom-[0] left-[0]",
                    arrowClass: "bottom-0 left-0",
                };
            case "bottom-right":
                return {
                    cardClass: "bottom-[40px] -right-[124px] max-md:right-[-10px]",
                    arrowClass: "top-[98.2%] left-[47%]",
                };
            case "center-left":
                return {
                    cardClass: "-top-[210px] left-[40px]",
                    arrowClass: "top-[50%] left-[-4px]",
                };
            case "center-right":
                return {
                    cardClass: "-top-[210px] right-[40px]",
                    arrowClass: "top-[50%] -right-[6px]",
                };
            default:
                return {
                    cardClass: "center",
                    arrowClass: "top-0 left-0",
                };
        }
    };

    const { cardClass, arrowClass } = getCardPosition();
    return (
        <section className="absolute" style={{ top, left }}>
            <div className="relative group">
                {/* Nút + */}
                <button className="flexCenter w-[32px] h-[32px] bg-white rounded-full hover-bg-gray-100 shadow-md duration-500">
                    <span className="absolute z-10 inline-flex h-full w-full rounded-full border-4 border-white opacity-50 animate-slow-ping"></span>
                    <Plus className="w-[12px] h-[12px]" />
                </button>

                {/* Card sản phẩm */}
                <div
                    className={`absolute z-20 opacity-0 invisible scale-75 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-500 ease-in-out  ${cardClass} `}
                >
                    {/* Mũi tên */}
                    <div className={`absolute ${arrowClass}`}>
                        <div className="w-3 h-3 bg-white rotate-45"></div>
                    </div>

                    {/* Nội dung card */}
                    <div
                        className={`text-center min-w-[276px] max-lg:min-w-[200px] p-[20px] pb-[30px] bg-white shadow-[0px_7px_14px_0px_rgba(0,0,0,0.1)] rounded-md`}
                    >
                        <img className="w-full object-cover" src={product.image} alt="" />
                        <h2 className="mb-[7px] text-center text-[#222] font-[jost] font-medium cursor-pointer">
                            {product.title}
                        </h2>
                        <p className="flexCenter mb-[10px] gap-1 text-[14px]">
                            <del className="text-[#888]">${product.oldPrice}.00</del>
                            {product.newPrice && <ins className="text-[#2a74ed]">${product.newPrice}.50</ins>}
                        </p>
                        <div className="mb-[10px]">{renderStar(5)}</div>
                        <button
                            className="bg-[#222] text-white border-solid rounded-[6px] w-[151px] h-[42px] transition-colors duration-200 ease-linear hover:bg-gray-600"
                            type="button"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hotspot;
