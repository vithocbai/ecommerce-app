import { Star, Trash2, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const CheckoutCart = () => {
    const { cartItems, subTotal, removeTocart ,removeToCartAll } = useCart();
    const navigate = useNavigate()
    return (
        <section className="relative max-w-[1600px] mx-auto p-[15px] pb-[100px]">
            {/* Thanh tiến trình */}
            <div className="mb-5 p-5 border border-[#e1e1e1]">
                <div className="flex gap-1 items-center">
                    <Star size={16} strokeWidth={1.8} />
                    <p>Congratulations! You've got free shipping.</p>
                </div>
                <progress className="mt-[10px] w-full" max="100" value="100"></progress>
            </div>

            {/* Thanh toán - woocommerce */}
            <div className="flex max-lg:flex-col max-lg:gap-8">
                <div className="w-[60%] max-lg:w-full">
                    {/* Xem thông tin sản phẩm */}
                    {/* Destop and table */}
                    <table className="max-lg:hidden w-full">
                        <thead>
                            <tr className="text-[#222] text-[14px] font-semibold border-b border-[#e1e1e1]">
                                <th className="w-[45%] text-left py-4 pr-4">Product</th>
                                <th className="py-4 text-center">Price</th>
                                <th className="py-4 text-center">SKU</th>
                                <th className="py-4 text-center">Quantity</th>
                                <th className="py-4 text-right pl-4">Subtotal</th>
                            </tr>
                        </thead>

                        <tbody className="[&>tr>td]:align-top [&>tr>td]:py-6 border-b border-[#e1e1e1]">
                            {cartItems.map((product) => (
                                <tr key={product.sku}>
                                {/* Product */}
                                <td className="pr-6">
                                    <div className="flex items-start gap-4">
                                    <img
                                        className="w-[80px] h-[80px] object-cover rounded-md"
                                        src={`/${product.image[0]}`}
                                        alt=""
                                    />
                                    <div>
                                        <h3 className="text-[18px] font-medium text-[#222] mb-2 hover:text-[#2a74ed]">
                                        {product.title}
                                        </h3>
                                        <button
                                        onClick={() => removeTocart(product)}
                                        className="text-[14px] text-[#666] underline hover:text-red-500"
                                        >
                                        Remove
                                        </button>
                                    </div>
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="text-[#666] text-[16px] text-center">
                                    $
                                    {new Intl.NumberFormat("en-US", {
                                    minimumFractionDigits: 2,
                                    }).format(product.price)}
                                </td>

                                {/* SKU */}
                                <td className="text-[#444] text-[15px] text-center">
                                    {product.sku}
                                </td>

                                {/* Quantity */}
                                <td className="text-[#444] text-[16px] text-center">
                                    {product.quantity}
                                </td>

                                {/* Subtotal */}
                                <td className="text-[#222] text-[16px] text-right font-medium">
                                    $
                                    {new Intl.NumberFormat("en-US", {
                                    minimumFractionDigits: 2,
                                    }).format(product.quantity * product.price)}
                                </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    {/* Mobile */}
                    <table className="lg:hidden">
                        <tbody>
                        {cartItems.map((product) => {
                                return (
                                    <tr>
                                        <td className="align-top pt-[18px]">
                                            <div className="max-w-[200px] w-[55px] h-[55px] object-cover mr-4">
                                                <img
                                                    className=""
                                                    src={`/${product.image[0]}`}
                                                    alt=""
                                                />
                                            </div>
                                        </td>
                                        <td className="text-[#888] text-[18px] text-left px-[4px] pt-[18px] pb-[12px]">
                                            <div className="w-full text-[#222]">
                                                <h3 className="w-full text-[20px] hover:text-[#2a74ed] font-medium">
                                                    {product.title}
                                                </h3>
                                                
                                            </div>
                                            <div className="flex items-center pt-[7px] mt-[7px] border-t border-dashed border-t-[#e1e1e1]">
                                                <div className="text-[#222] text-[18px]">{product.quantity}</div> 
                                                <span className="text-[#222]"><X size={12}/></span>
                                                 $
                                                {new Intl.NumberFormat("en-US", {
                                                    minimumFractionDigits: 2,
                                                }).format(product.price)}
                                            </div>
                                            <div className="text-[#888] text-[18px] pt-[7px] mt-[5px] border-y border-dashed border-y-[#e1e1e1]">
                                                <span className="text-[#222]">Subtotal: </span>
                                                $
                                                {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                                    product.quantity * product.price
                                                )}
                                            </div>
                                            <span onClick={() => (removeTocart(product))} className="block text-[17px] text-[#222] underline cursor-pointer hover:opacity-60 pt-[5px]">
                                                Remove
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {/* Phần Coupon và Clear Cart */}
                    <div className="w-full flex max-md:flex-col gap-2 pt-[18px] border-t border-[#e1e1e1] ">
                        <div className="flex justify-between w-full">
                            <input
                                type="text"
                                placeholder="Coupon code"
                                className="border border-[#e1e1e1] pl-[16px] text-[14px] py-1 w-full outline-none focus:border-[#222] focus:border-r-0 rounded-full rounded-r-none"
                            />
                            <button className="bg-[#2a74ed] flex-shrink-0 w-[36px] h-[36px] text-white  font-medium hover:bg-blue-600 transition-colors rounded-r-full">
                                OK
                            </button>
                        </div>
                        <div className="w-full flex justify-end ">
                            <button
                                onClick={() => removeToCartAll()}
                                className=" flex items-center max-lg:justify-center gap-2 h-[38px] px-[30px] rounded-full border border-[#e1e1e1] text-[#222] font-semibold hover:text-red-500 transition-colors mt-4 md:mt-0 max-lg:w-full "
                            >
                                <Trash2 size={16} />
                                Clear shopping cart
                            </button>
                        </div>
                    </div>
                </div>

                {/*  Bảng tiền thanh toán */}
                <div className=" w-[40%] max-lg:w-full ml-[30px] max-lg:ml-0">
                    <div className="p-[36px] border-[2px] border-[#222] rounded-[15px]">
                        <h3 className="text-[#222] font-medium text-[14px] pb-[14px] mb-[19px] border-b border-[#e1e1e1]">
                            Cart totals
                        </h3>
                        <div className="flex items-center justify-between">
                            <h3 className="text-[#444] pr-[12px] pb-[12px]">Subtotal</h3>
                            <p className="text-[#888] text-[18ppx] pl-[12px] pb-[12px]">
                                $
                                {new Intl.NumberFormat("en-US", {
                                    minimumFractionDigits: 2,
                                }).format(subTotal)}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-[25px]">
                            <h3 className="text-[20px] uppercase pt-[14px] pr-[14px]">Total</h3>
                            <p className="text-[20px] pt-[14px] pl-[14px]">
                                ${new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(subTotal)}
                            </p>
                        </div>

                        <button onClick={()=> navigate('/checkout/shipping')} className="w-full block bg-black hover:bg-[#2a74ed]  transition duration-150 text-[#fff] font-semibold leading-4 px-[30px] py-[13px] mb-[10px] rounded-full max-lg:hidden">
                            Proceed to checkout
                        </button>
                        <button onClick={() => navigate('/shop')} className="w-full block bg-white text-[#222] font-semibold leading-4 px-[30px] py-[13px] rounded-full border border-[#e1e1e1] max-lg:hidden">
                            Continue shopping
                        </button>
                    </div>
                    <div className="mt-[30px]">
                        <h3 className="text-center text-[#333] text-[24px] font-medium mb-[15px]">Payment security</h3>
                        <p className="text-[#777] text-center mb-[15px]">
                            Encryption ensures increased transaction security. SSL technology protects data linked to
                            personal and payment info.
                        </p>
                        <ul className="flex items-center justify-center gap-[12px]">
                            <li className="px-[4px]">
                                <img className="w-[48px] h-[48px] object-cover" src="/payment/img1.svg" alt="" />
                            </li>
                            <li className="px-[4px]">
                                <img className="w-[48px] h-[48px] object-cover" src="/payment/img2.svg" alt="" />
                            </li>
                            <li className="px-[4px]">
                                <img className="w-[48px] h-[48px] object-cover" src="/payment/img3.svg" alt="" />
                            </li>
                            <li className="px-[4px]">
                                <img className="w-[48px] h-[48px] object-cover" src="/payment/img4.svg" alt="" />
                            </li>
                            <li className="px-[4px]">
                                <img className="w-[48px] h-[48px] object-cover" src="/payment/img5.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer wc-proceed-to-checkout */}
            <div className="fixed left-0 right-0 bottom-0 bg-white shadow-[0_0_20px_0_#00000033] p-5 lg:hidden">
                <button 
                    onClick={()=> navigate('/checkout/shipping')} 
                    className=" w-full bg-black hover:bg-[#2a74ed]  transition duration-150 text-[#fff] font-semibold leading-4 px-[30px] py-[13px] mb-[10px] rounded-full ">
                    Proceed to checkout
                </button>
            </div>
        </section>
    );
};
