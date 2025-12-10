import { ShoppingBasket, X } from "lucide-react";
import { HeaderSidebar } from "../../ui/HeaderSidebar";
import { useCart } from "../../../context/CartContext";
import { useState } from "react";
import type { ShopProductProps } from "../../../data/shopProduct";
import { Spinner } from "../../ui/spinner";

export const Cart = () => {
    const [removeProductId, setRemoveProductId] = useState<number | null>(null);

    const { cartItems, removeTocart } = useCart();

    // Tính tổng tiền
    const handleTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, num) => total + num.price * num.quantity, 0);
        return totalPrice;
    };

    const handleRemove = (product: ShopProductProps) => {
        setRemoveProductId(product.id);

        setTimeout(() => {
            removeTocart(product);
            setRemoveProductId(null);
        }, 1000);
    };

    return (
        <section className="px-[30px] py-5 pr-[10px] h-full flex flex-col max-md:px-[20px]">
            <HeaderSidebar title="CART" icon={<ShoppingBasket strokeWidth={1.2} className="w-7 h-7" />} />
            {cartItems.length > 0 ? (
                <>
                    {/* Scrollable product list */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar-thin">
                        <ul>
                            {cartItems.map((product) => {
                                return (
                                    <li
                                        key={product.sku}
                                        className={`group relative py-5 px-3 border-b-[1px] border-[#e1e1e1] last:border-b-0 hover:bg-[#f7f7f7] transform duration-150
                                            ${removeProductId === product.id ? 'opacity-15' : 'opacity-100'}`
                                        }
                                    >
                                        {/* Loading spinner */}
                                        {removeProductId === product.id && (
                                            <div className="absolute inset-0 flexCenter">
                                                <Spinner size="sm" />
                                            </div>
                                        )}
                                        {/* Close */}
                                        <div
                                            onClick={() => handleRemove(product)}
                                            className="absolute top-1 right-[-10px] group-hover:right-[6px] opacity-0 group-hover:opacity-100 transform duration-300 cursor-pointer"
                                        >
                                            <X strokeWidth={1.2} size={20} className="text-[#929090]" />
                                        </div>
                                        <div className="flex">
                                            {product?.image.slice(0, 1).map((item, idx) => (
                                                <img
                                                    key={idx}
                                                    src={item}
                                                    alt=""
                                                    className="w-[70px] h-[70px] object-cover mr-5 cursor-pointer"
                                                />
                                            ))}
                                            <div>
                                                <h3 className="text-[#222] text-[15px] font-medium line-clamp-1">
                                                    {product.title}
                                                </h3>
                                                <p className="flex items-center gap-1 text-[#222] mt-[6px] text-[14px]">
                                                    <span>{product.quantity}</span>
                                                    <span>
                                                        <X strokeWidth={1.6} size={12} />
                                                    </span>
                                                    <span>
                                                        $
                                                        {new Intl.NumberFormat("en-US", {
                                                            minimumFractionDigits: 2,
                                                        }).format(product.price)}
                                                    </span>
                                                </p>
                                                <p className="text-[#222] text-[16px] mt-[6px]">SKU: {product.sku}</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Fixed Footer */}
                    <div className="pt-[15px] flex-shrink-0">
                        {/* Subtotal */}
                        <div className="flex items-center justify-between py-[14px] text-[#222] border-y-[1px] border-[#e1e1e1]">
                            <div className="uppercase text-[14px]">Subtotal:</div>
                            <span>
                                $
                                {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                    handleTotalPrice()
                                )}
                            </span>
                        </div>
                        {/* Action */}
                        <div className="pt-[20px]">
                            <button className="block text-center text-[#222] font-bold rounded-full mx-auto w-full h-[45px] bg-[#f2f2f2]">
                                <a href="">View Cart</a>
                            </button>
                            <button className="block text-center text-white rounded-full mt-[9px] mx-auto w-full h-[45px] bg-[#2a74ed] hover:bg-black duration-300">
                                <a href="">Checkout</a>
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center">
                    <p className="text-center mb-[20px]">No products in the cart.</p>
                    <button className="block text-center text-white rounded-full mx-auto w-[170px] h-[37px] bg-[#2a74ed] hover:bg-black duration-300">
                        <a href="">Return To Shop</a>
                    </button>
                </div>
            )}
        </section>
    );
};
