import { Link, useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import {
    ChevronRight,
    Facebook,
    Heart,
    Linkedin,
    Minus,
    PhoneOutgoing,
    Plus,
    RefreshCcw,
    ShoppingBasket,
    Twitter,
} from "lucide-react";
import { sampleCategory } from "../../data/sampleCategory";
import { renderStars } from "../ui/renderStar";
import { AddToCart } from "../ui/addToCart";
import { useState } from "react";

export const ProductDetail = () => {
    const location = useLocation();
    const product = location.state.product;
    const [totalAddCart, setTotalAddCart] = useState(1);
    // Tìm category name dựa vào categoryId
    const categoryIdName = sampleCategory.find((cat) => cat.id === product.categoryId)?.name || "";

    const handleMinus = () => {
        setTotalAddCart((prev) => prev - 1);
    };

    const handlePlus = () => {
        setTotalAddCart((prev) => prev + 1);
    };

    return (
        <section className="max-w-[1600px] mx-auto">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <nav className="flex items-center  my-[15px] px-[15px] text-[13px] text-[#666]">
                <ul className="flex items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <ChevronRight size={14} />
                    </li>
                    <li>{categoryIdName}</li>
                    <li>
                        <ChevronRight size={14} />
                    </li>
                    <li>{product.title}</li>
                </ul>
            </nav>

            {/* Nội dung */}
            <div className="w-full flex ">
                {/* Chi tiết sản phẩm  */}
                <div className="w-[76%] flex p-[15px]">
                    {/* Image */}
                    <div>
                        {product.image.map((item: string, index: number) => (
                            <img key={index} src={`/${item}`} />
                        ))}
                    </div>
                    <div>
                        <h1>{product.title}</h1>
                        <div>
                            <span>{renderStars(product.star)}</span> <span>(1 customer review)</span>
                        </div>
                        <div>
                            {product.oldPrice ? (
                                <div>
                                    <span>
                                        $
                                        {new Intl.NumberFormat("en-US", {
                                            minimumFractionDigits: 2,
                                        }).format(product.oldPrice)}
                                    </span>
                                    <span>
                                        $
                                        {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                            product.price
                                        )}
                                    </span>
                                </div>
                            ) : (
                                <span>
                                    $
                                    {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(product.price)}
                                </span>
                            )}
                        </div>
                        <p>{product.preview} people are viewing this product right now</p>
                        <p>
                            This Bluetooth speaker delivers big sound, making it then only music system you’ll need in
                            or out of the house. Prem materials such as anodized aluminum & durable polymers withstand
                            the rigor of an active lifestyle.
                        </p>

                        {/* Add Cart */}
                        <div>
                            <div className="flex items-center mr-[20px] h-[38px] cursor-pointer">
                                <span onClick={handleMinus} className="flexCenter px-[4px] text-[#222]  h-full">
                                    <Minus strokeWidth={1.5} size={20} />
                                </span>
                                <div className="flexCenter w-[20px] h-full select-none">{totalAddCart}</div>
                                <span onClick={handlePlus} className="flexCenter px-[4px] text-[#222] h-full">
                                    <Plus strokeWidth={1.5} size={20} />
                                </span>
                            </div>
                            <div className="w-[280px] h-[53px]">
                                <AddToCart title="Add to card" icon={<ShoppingBasket strokeWidth={2.5} size={18} />} />
                            </div>
                        </div>

                        {/* Heart */}
                        <div className="flex items-center gap-[2px] mb-[10px] cursor-pointer">
                            <Heart size={20} strokeWidth={1.5} />
                            <p className="pl-[5px]">Add to wishlist</p>
                        </div>
                        {/* Reaload */}
                        <div className="flex items-center gap-[2px] mb-[10px] cursor-pointer">
                            <RefreshCcw size={20} strokeWidth={1.5} />
                            <p className="pl-[5px]">Add to compare</p>
                        </div>
                        {/* Skud */}
                        <div className="text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] uppercase">sku: </span> {product.sku}
                        </div>
                        {/* Category */}
                        <div className="text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] ">Category: </span> {categoryIdName}
                        </div>
                        {/* Tags */}
                        <div className="text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] ">Tags: </span> Headphones, Speaker
                        </div>
                        {/* Share */}
                        <div className="flex items-center gap-1 text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] mr-1">Share:</span>
                            <span>
                                <Twitter size={16} />
                            </span>
                            <span>
                                <Facebook size={16} />
                            </span>
                            <span>
                                <Linkedin size={16} />
                            </span>
                            <span>
                                <PhoneOutgoing size={16} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* Sidebar Right */}
                <div className="w-[24%]">Sidebar</div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
};
