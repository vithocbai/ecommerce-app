import type { ShopProductProps } from "../../data/shopProduct";
import { AddToCart } from "../ui/addToCart";
import { Eye, Heart } from "lucide-react";
import { renderStars } from "../ui/renderStar";
import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";
import { QuickViewModal } from "./QuickView/QuickViewModal";
import { Sidebar } from "../Sidebar/Sidebar";
import { useCart } from "../../context/CartContext";

type showProductGridProps = {
    products: ShopProductProps[];
};

export const ShopProductGrid = ({ products }: showProductGridProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadingProductId, setLoadingProductId] = useState<number | null>(null);

    const [quickViewProduct, setQuickViewProduct] = useState<ShopProductProps | null>(null);
    const [sidebarType, setSidebarType] = useState<string>("ADDTOCART");
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isOpenAddToCart, setIsOpenAddToCart] = useState(false);

    // Context
    const { addToCart } = useCart();

    // Loading khi chạy
    useEffect(() => {
        setTimeout(() => {
            products;
            setIsLoading(false);
        }, 1000);
    }, []);

    const openQuickView = (product: ShopProductProps) => {
        setQuickViewProduct(product);
        setIsOpenModel(true);
    };

    const closeQuickView = () => {
        setIsOpenModel(false);
    };

    const handleOpenAddToCart = (product: ShopProductProps) => {
        setLoadingProductId(product.id);

        setTimeout(() => {
            setIsOpenAddToCart(true);
            addToCart(product);
            setLoadingProductId(null);
        }, 1000);
    };

    const closeAddToCart = () => {
        setIsOpenAddToCart(false);
    };

    return (
        <section>
            {isLoading ? (
                <div className="flexCenter min-h-[400px]">
                    <Spinner size="sm" color="text-green-500" />
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[30px]">
                        {products.map((product) => (
                            <div className="group border-[1px] border-[#E5E5E5] p-[5px] pb-[25px] rounded-[20px] hover:cursor-pointer">
                                {/* Image */}
                                <div className="relative mb-[15px] mx-[7px] my-[5px]">
                                    {/* Sale */}
                                    {product.oldPrice && (
                                        <div className="absolute top-[20px] left-[10px] text-[#fff] w-[48px] text-center rounded-full px-[8px] py-[3px] bg-[#c62828] text-[12px] uppercase">
                                            Sale
                                        </div>
                                    )}
                                    {/* Heart */}
                                    <div className="absolute right-[5px] top-[5px] opacity-0 scale-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-linear">
                                        <Heart size={18} />
                                    </div>
                                    {/* Image */}
                                    {product.image.slice(0, 1).map((item) => (
                                        <img src={item} alt="" className="max-w-[100%] object-cover" />
                                    ))}

                                    {/* Quick Shop  */}
                                    <div
                                        onClick={() => openQuickView(product)}
                                        className="absolute left-0 right-0 bottom-0 flex items-center justify-center bg-[#000] rounded-full text-[#fff] px-[10px] py-[7px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:bottom-2 transition-all duration-200 ease-linear"
                                    >
                                        <span>
                                            <Eye />
                                        </span>
                                        <button className="ml-[10px] text-[18px]">Quick shop</button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-[15px] text-[16px] text-[#222] font-medium text-center">
                                        {product.title}
                                    </h3>
                                    <p className="text-[18px] text-[#888888] mb-[5px] text-center">{product.brand}</p>
                                    <div className="flex items-center justify-center mb-[7px]">
                                        {renderStars(product.star)}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-[18px] text-[#444] text-center mb-[15px]">
                                    {product.oldPrice ? (
                                        <div>
                                            <span className="line-through mr-2">
                                                $
                                                {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                                    product.oldPrice
                                                )}
                                            </span>
                                            <span className="text-[#2a74ed]">
                                                $
                                                {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                                    product.price
                                                )}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="">
                                            $
                                            {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                                product.price
                                            )}
                                        </span>
                                    )}
                                </div>
                                <div onClick={() => handleOpenAddToCart(product)} className="flex justify-center">
                                    {loadingProductId == product.id ? (
                                        <div className="w-[140px] flex items-center justify-center px-[30px] py-[10px] font-bold text-[16px] bg-[#000] text-[#fff] rounded-full transition-all duration-200 ease-linear">
                                            <Spinner size="sm" color="text-white" />
                                        </div>
                                    ) : (
                                        <AddToCart title="Add to cart" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* QuickViewModal */}
                    <QuickViewModal product={quickViewProduct} isOpen={isOpenModel} onClose={closeQuickView} />

                    {/* SideBar Cart */}
                    <Sidebar open={isOpenAddToCart} close={closeAddToCart} type={sidebarType} />
                </div>
            )}
        </section>
    );
};
