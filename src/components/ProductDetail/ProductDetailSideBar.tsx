import { useMemo } from "react";
import { sampleCategory } from "../../data/sampleCategory";
import { shopProducts, type ShopProductProps } from "../../data/shopProduct";
import { createSlug } from "../ui/createSlug";
import { useNavigate } from "react-router-dom";

type ProductDetailSideBarProps = {
    products: ShopProductProps;
};  

export const ProductDetailSideBar = ({products}: ProductDetailSideBarProps) => {
    const activeCategory = products.categoryId;
    const navigate = useNavigate();

    // Tính số lượng của Category
    const categoryCount = shopProducts.reduce<Record<number, number>>((acc, item) => {
        acc[item.categoryId] = (acc[item.categoryId] || 0) + 1;
        return acc;
    }, {});

    // Hiển thị ngẫu nhiên 5 sản phẩm
    const productRandom = useMemo(() => {
        return [...shopProducts].sort(() => Math.random() - 0.5).slice(0, 5);
    }, []);

    // Hàm chuyển chi tiết sản phẩm
    const handleNavigateToDetail = (product: ShopProductProps) => {
        const slug = createSlug(product.title);
        navigate(`/product/${slug}`, { state: { product } });
    };

    return (
        <section>
            {/* Danh mục sản phẩm và số lượng*/}
            <div className="p-[35px] border border-[#E5E5E5] rounded-[16px] mb-5">
                <h3 className="text-[18px] text-[#222] font-medium pb-[18px] mb-[25px] border-b border-[#E5E5E5]">
                    Product Categories
                </h3>
                <ul>
                    {sampleCategory.map((categories) => (
                        <li
                            className={`flex items-center gap-1 text-[18px] py-[5px] first:pt-0 last:pb-0 leading-7 ${
                                activeCategory === categories.id ? "text-[#222]" : "text-[#888]"
                            }`}
                        >
                            <span className="relative block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#222] hover:after:w-full after:transform after:duration-300 after:ease-linear">
                                {categories.name}
                            </span>
                            <span className="text-[16px]">({categoryCount[categories.id || 0]})</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Sản phẩm */}
            <div className="p-[35px] border border-[#E5E5E5] rounded-[16px] mb-12">
                <h3 className="text-[18px] text-[#222] font-medium pb-[18px] mb-[25px] border-b border-[#E5E5E5]">
                    Products
                </h3>
                <ul>
                    {productRandom.map((product) => {
                        return (
                            <div className="flex items-center mb-5 last:mb-0 cursor-pointer">
                                {product.image.slice(0, 1).map((imgSrc) => (
                                    <img
                                        className="w-[70px] h-[70px] object-cover mr-5"
                                        src={`/${imgSrc}`}
                                        alt=""
                                        onClick={() => handleNavigateToDetail(product)}
                                    />
                                ))}
                                <div className="text-[#888] text-[16px]">
                                    <h4 className="text-[#222] line-clamp-1">{product.title}</h4>
                                    {product.oldPrice ? (
                                        <div className="flex flex-wrap ">
                                            <span className="text-[14px] line-through mr-2">
                                                $
                                                {new Intl.NumberFormat("en-US", {
                                                    minimumFractionDigits: 2,
                                                }).format(product.oldPrice)}
                                            </span>
                                            <span className="text-[14px] text-[#2a74ed]">
                                                $
                                                {new Intl.NumberFormat("en-US", {
                                                    minimumFractionDigits: 2,
                                                }).format(product.price)}
                                            </span>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="text-[14px] text-[#888]">
                                                $
                                                {new Intl.NumberFormat("en-US", {
                                                    minimumFractionDigits: 2,
                                                }).format(product.price)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </ul>
            </div>
            {/* Banner */}
            <div className="group relative overflow-hidden">
                <div className="absolute z-50 left-1/2 translate-x-[-50%] p-[40px] w-full text-center">
                    <p className="text-[18px] text-[#777] ">Most Powerful</p>
                    <h3 className="text-[36px] text-[#222] font-semibold mb-[10px]">Powerbank</h3>
                    <button className="text-[16px] text-white font-medium bg-[#2a74ed] hover:bg-[#222] transition duration-300 ease-linear rounded-full px-8 py-2">
                        Shop Now
                    </button>
                </div>
                <img
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300 ease-linear"
                    src="/productDetail/Banner.jpeg"
                    alt=""
                />
            </div>
        </section>
    );
};
