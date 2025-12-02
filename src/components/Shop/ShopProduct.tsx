import { Grid3x3, List } from "lucide-react";
import { ShopProductGrid } from "./ShopProductGrid";
import { shopProducts } from "../../data/shopProduct";
import { useEffect, useRef, useState } from "react";
import { ShopProductList } from "./ShopProductList";

export const ShopProduct = () => {
    const [showTypeProduct, setShowTypeProduct] = useState("productGrid");
    const [limit, setLimit] = useState<number | "all">(12);
    const productsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(productsRef.current) {
            const top = productsRef.current?.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: top - 100,
                behavior: 'smooth'
            })
        }
    }, [showTypeProduct]);

    const visibleProducts = limit === "all" ? shopProducts : shopProducts.slice(0, limit);
    return (
        <section>
            <div className="max-w-[1600px] mx-auto p-[15px]">
                {/* Controls Product */}
                <div className="flex max-md:block items-center justify-between mb-[10px]">
                    <div className="flex items-center max-md:mb-2">
                        {/* Dropdown sort*/}
                        <select
                            name=""
                            id=""
                            className="text-[14px] max-w-[170px] px-[10px] cursor-pointer text-[#888] h-[38px] border-[1px] border-[#e1e1e1] bg-[#fff] outline-none rounded-full"
                        >
                            <option value="">Default sorting</option>
                            <option value="">Sort by popularity</option>
                            <option value="">Sort by average rating</option>
                            <option value="">Sort by latest</option>
                            <option value="">Sort by price: low to high</option>
                            <option value="">Sort by price: high to low</option>
                        </select>

                        {/* Selected type */}
                        <div className="flex items-center mx-[20px] h-full cursor-pointer">
                            <span
                                className={`relative p-[10px] after:absolute after:w-[1px] after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[50%] after:bg-[#ccc] 
                            ${showTypeProduct === "productGrid" ? "text-[#2A74ED]" : "text-[#222]"}`}
                            >
                                <Grid3x3 onClick={() => setShowTypeProduct("productGrid")} size={20} />
                            </span>
                            <span className={`text-[#222] p-[10px] ${showTypeProduct === "productList" ? "text-[#2A74ED]" : "text-[#222]"}` }>
                                <List onClick={() => setShowTypeProduct("productList")} size={20} />
                            </span>
                        </div>
                    </div>

                    {/* limit product  */}
                    <div className="flex items-center">
                        <p className="text-[18px] text-[#444] mr-[10px]">Show</p>
                        <select
                            value={limit}
                            className="pl-[18px] pr-[42px] text-[#888] h-[39px] border-[1px] border-[#e1e1e1] max-w-[100%] rounded-[20px]"
                            onChange={(e) => setLimit(e.target.value === "all" ? "all" : Number(e.target.value))}
                        >
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="36">36</option>
                            <option value="all">All</option>
                        </select>
                    </div>
                </div>
                <div ref={productsRef}>
                    {showTypeProduct === "productList" && <ShopProductList products={visibleProducts} />}
                    {showTypeProduct === "productGrid" && <ShopProductGrid products={visibleProducts} />}
                </div>
            </div>
        </section>
    );
};
