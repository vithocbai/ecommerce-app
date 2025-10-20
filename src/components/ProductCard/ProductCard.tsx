import { COLORS } from "../../theme";
import type { Products } from "../../types/product";
import { Star, ShoppingCart, Heart, Eye, RefreshCcw } from "lucide-react";

interface ProductCardProps {
    product: Products;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const renderRating = () => {
        const totalStar = 5;
        const star = [];
        for (let i = 0; i < totalStar; i++) {
            let isFilter = i < product.rating;
            star.push(
                <span key={i} className={`${isFilter ? "text-yellow-300" : "text-gray-400"}`}>
                    <Star className="w-[16px]" fill={isFilter ? "#facc15" : "#9ca3af"} />
                </span>
            );
        }
        return star;
    };
    return (
        <section>
            <div className="p-[15px] border border-[#E1E1E1] rounded-[20px] group">
                <header className="relative">
                    <img className="max-w-full object-cover" src={product.image} alt="" />
                    <div className="absolute overflow-hidden cursor-pointer top-[40%] right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-[20px] transition-all duration-400 ease-linear bg-black rounded-[20px] text-white w-[40px] h-auto">
                        <span className="block py-2 hover:bg-[#8f8f8f]">
                            <ShoppingCart className="mx-auto w-[20px]" strokeWidth={1.5} />
                        </span>
                        <span className="block py-2 hover:bg-[#8f8f8f]">
                            <Heart className="mx-auto w-[20px]" strokeWidth={1.5} />
                        </span>
                        <span className="block py-2 hover:bg-[#8f8f8f]">
                            <RefreshCcw className="mx-auto w-[20px]" strokeWidth={1.5} />
                        </span>
                        <span className="block py-2 hover:bg-[#8f8f8f]">
                            <Eye className="mx-auto w-[20px]" strokeWidth={1.5} />
                        </span>
                    </div>
                </header>
                <h3 className="text-[18px] mb-[3px]" style={{ color: COLORS.secondary }}>
                    {product.category}
                </h3>
                <h2 className="text-[16px] font-medium mb-[5px]" style={{ color: COLORS.primary }}>
                    {product.descriptions}
                </h2>
                <div className="flex max-w-[81px] mb-[3px]">{renderRating()}</div>
                <p className="mb-[7px] text-[18px]">
                    <span className="line-through text-[#444] mr-1">${product.oldPrice.toFixed(2)} </span>
                    {product.newPrice && <span className="text-[#2a74ed]">${product.newPrice?.toFixed(2)}</span>}
                </p>
            </div>
        </section>
    );
};
