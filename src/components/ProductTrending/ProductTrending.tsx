import { COLORS } from "../../theme";
import type { Products } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";

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
                <img className="mx-auto mb-5" src="producthots/line1.jpeg" alt="" />
            </div>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </section>
    );
};
