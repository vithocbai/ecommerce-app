import { AddToCart } from "../ui/addToCart";
import { Eye, Heart } from "lucide-react";

type shopProductProps = {
    id: number;
    title: string;
    image: string;
    star: number;
    brand?: string;
    oldPrice?: number;
    price: number;
};

type showProductGridProps = {
    products: shopProductProps[];
};

export const ShopProductGrid = ({ products }: showProductGridProps) => {
    return (
        <section>
            <div className="grid grid-cols-4 gap-[30px]">
                {products.map((product) => (
                    <div className="group border-[1px] border-[#E5E5E5] p-[5px] pb-[25px] rounded-[20px] hover:cursor-pointer">
                        {/* Image */}
                        <div className="relative mb-[15px] mx-[7px] my-[5px]">
                            {/* Sale */}
                            {product.oldPrice && <div className="absolute top-[20px] left-[10px] text-[#fff] w-[48px] text-center rounded-full px-[8px] py-[3px] bg-[#c62828] text-[12px] uppercase">Sale</div>}
                            {/* Heart */}
                            <div className="absolute right-[5px] top-[5px] opacity-0 scale-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-linear">
                              < Heart size={18}/>
                            </div>
                            <img src={product.image} alt="" className="max-w-[100%] object-cover" />
                            {/* Quick Shop  */}
                            <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center bg-[#000] rounded-full text-[#fff] px-[10px] py-[7px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:bottom-2 transition-all duration-200 ease-linear">
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
                            <p className="text-[18px] text-[#888888] mb-[3px] text-center">{product.brand}</p>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-[18px] text-[#444] text-center mb-[15px]">
                            {product.oldPrice && (
                                <span className="line-through">
                                    $
                                    {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                        product.oldPrice
                                    )}
                                </span>
                            )}
                            <span className="text-[#2a74ed]">
                                ${new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(product.price)}
                            </span>
                        </div>
                        <div className="mx-auto text-center">
                            <AddToCart title="Add to cart" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
