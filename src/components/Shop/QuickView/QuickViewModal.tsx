import {
    X,
    Eye,
    RefreshCcw,
    Heart,
    Twitter,
    Facebook,
    Linkedin,
    PhoneOutgoing,
    ChevronUp,
    ChevronDown,
    Minus,
    Plus,
    ShoppingBasket,
    MoveLeft,
    MoveRight,
} from "lucide-react";
import { renderStars } from "../../ui/renderStar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AddToCart } from "../../ui/addToCart";
import type { ShopProductProps } from "../../../data/shopProduct";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    product?: ShopProductProps | null;
};

export const QuickViewModal = ({ isOpen, onClose, product }: Props) => {
    const [showMoreDetail, setShowMoreDetail] = useState(false);
    const [totalAddCart, setTotalAddCart] = useState(1);
    const handleMinus = () => {
        setTotalAddCart((prev) => Math.max(1, prev - 1));
    };

    const handlePlus = () => {
        setTotalAddCart((prev) => prev + 1);
    };

    return (
        <section>
            <AnimatePresence>
                {isOpen && (
                    <div>
                        {/* Overlay */}
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={onClose}
                                className="fixed inset-0 z-[40] bg-[rgba(0,0,0,0.4)]"
                            />
                        )}

                        {/* Sidebar */}
                        {isOpen && (
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: "0%" }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.2, ease: "linear" }}
                                className="fixed top-0 right-0 z-[50] w-[400px] h-screen bg-white overflow-y-auto p-[15px]"
                            >
                                {/* Close Button */}
                                <div
                                    onClick={() => onClose()}
                                    className="flexCenter cursor-pointer fixed top-[15px] right-[415px] z-[60] bg-white rounded-full w-[36px] h-[36px] shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <X size={14} />
                                </div>
                                {/* Content */}
                                <div className="px-[3px]">
                                    <h3 className="block text-[24px] text-[#222] font-medium mb-[12px] leading-7">
                                        <a href="">{product?.title}</a>
                                    </h3>
                                    {/* Image */}
                                    <div className="relative group/slider">
                                        {/* Custom navigation buttons */}
                                        <button className="swiper-button-prev absolute top-[48%] left-[0] z-10 opacity-0 invisible group-hover/slider:visible group-hover/slider:opacity-100 text-[#222] w-[40px] h-[40px] bg-white shadow-lg rounded-full border-[#DEDEDE] border-[1px] hover:border-[#444] flex items-center justify-center">
                                            <MoveLeft className="!w-[14px] !h-[14px]" />
                                        </button>
                                        <button className="swiper-button-next absolute top-[48%] right-[0] z-10 opacity-0 invisible group-hover/slider:visible group-hover/slider:opacity-100  text-[#222] w-[40px] h-[40px] bg-white shadow-lg rounded-full border-[#DEDEDE] border-[1px] hover:border-[#444] flex items-center justify-center">
                                            <MoveRight className="!w-[14px] !h-[14px]" />
                                        </button>
                                        <Swiper
                                            modules={[Navigation]}
                                            slidesPerView={1}
                                            navigation={{
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev",
                                            }}
                                        >
                                            <div className="w-full h-[360px] ">
                                                {product?.image.map((item) => (
                                                    <SwiperSlide>
                                                        <img src={item} alt="" className="cursor-pointer" />
                                                    </SwiperSlide>
                                                ))}
                                            </div>
                                        </Swiper>
                                    </div>
                                    {/* Price */}
                                    <div className="text-[#888] text-[20px] mb-[12px]">
                                        {product?.oldPrice ? (
                                            <div>
                                                <span>
                                                    <del>
                                                        $
                                                        {new Intl.NumberFormat("en-US", {
                                                            minimumFractionDigits: 2,
                                                        }).format(product.oldPrice)}
                                                    </del>
                                                </span>
                                                <span className="pl-4 text-[#2a74ed]">
                                                    $
                                                    {new Intl.NumberFormat("en-US", {
                                                        minimumFractionDigits: 2,
                                                    }).format(product?.price)}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="">
                                                $
                                                {new Intl.NumberFormat("en-US", {
                                                    minimumFractionDigits: 2,
                                                }).format(product?.price ?? 0)}
                                            </span>
                                        )}
                                    </div>
                                    {/* Rating */}
                                    <div className="flex items-center gap-[2px] mb-[12px]">
                                        {renderStars(product?.star ?? 0)}
                                        <span className="text-[18px] text-[#222]">
                                            ({product?.preview} customer review)
                                        </span>
                                    </div>
                                    {/* View people */}
                                    <p className="flex items-start gap-[2px] mb-[12px] text-[16px]">
                                        <span>
                                            <Eye className="w-[16px]" />
                                        </span>
                                        19 people are viewing this product right now
                                    </p>
                                    {/* Description */}
                                    <p className="text-[#444] text-[16px] mb-[12px]">
                                        This Bluetooth speaker delivers big sound, making it then only music system
                                        you’ll need in or out of the house. Prem materials such as anodized aluminum &
                                        durable polymers withstand the rigor of an active lifestyle.
                                    </p>
                                    {/* Add to Cart */}
                                    <div className="flex items-center mb-[22px]">
                                        <div className="flex items-center  mr-[20px] h-[38px] cursor-pointer">
                                            <span
                                                onClick={handleMinus}
                                                className="flexCenter px-[4px] text-[#222] border-[1px] border-[#e1e1e1] border-r-[0] h-full"
                                            >
                                                <Minus strokeWidth={1.5} size={18} />
                                            </span>
                                            <div className="flexCenter w-[45px] h-full border-[1px] border-[#e1e1e1] select-none">
                                                {totalAddCart}
                                            </div>
                                            <span
                                                onClick={handlePlus}
                                                className="flexCenter px-[4px] text-[#222] border-[1px] border-[#e1e1e1] border-l-[0] h-full"
                                            >
                                                <Plus strokeWidth={1.5} size={18} />
                                            </span>
                                        </div>
                                        <div className="select-none">
                                            <AddToCart
                                                title="Add to card"
                                                icon={<ShoppingBasket strokeWidth={2.5} size={18} />}
                                            />
                                        </div>
                                    </div>
                                    {/* Reaload */}
                                    <div className="flex items-center gap-[2px] mb-[10px] cursor-pointer">
                                        <RefreshCcw size={20} strokeWidth={1.5} />
                                        <p className="pl-[5px]">Add to compare</p>
                                    </div>
                                    {/* Heart */}
                                    <div className="flex items-center gap-[2px] mb-[10px] cursor-pointer">
                                        <Heart size={20} strokeWidth={1.5} />
                                        <p className="pl-[5px]">Add to wishlist</p>
                                    </div>
                                    {/* Skud */}
                                    <div className="text-[16px] text-[#888] mb-[12px]">
                                        <span className="text-[#222] uppercase">sku: </span> 1231-1
                                    </div>
                                    {/* Category */}
                                    <div className="text-[16px] text-[#888] mb-[12px]">
                                        <span className="text-[#222] ">Category: </span> Wearable Items
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
                                    {/* More Detail */}
                                    <div>
                                        <div
                                            onClick={() => setShowMoreDetail(!showMoreDetail)}
                                            className="flex items-center mb-[12px]"
                                        >
                                            <div className="underline">More Detail</div>
                                            <span>
                                                {showMoreDetail ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </span>
                                        </div>
                                        <AnimatePresence>
                                            {showMoreDetail && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.5, ease: "easeIn" }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <h2 className="my-[8px] text-[24px] font-medium">Overview</h2>
                                                    <h2 className="my-[8px] text-[24px] font-medium leading-7">
                                                        Featuring True360 Sound Technology
                                                    </h2>
                                                    <p className="text-[#444]">
                                                        With its compact footprint and convenient leathers carrying
                                                        handles the Beolit 17 wireless Bluetooth speaker ready to
                                                        accompany you on all of life’s adventures Featuring 360-degrees
                                                        sound technology the Beolit 17 lets you enjoying immersive Bang
                                                        & Olufsen signature sound whenever and wherever you'd like
                                                        Whether you’re at home or on the road you can transform any
                                                        moment with the power clarity portable.
                                                    </p>
                                                    <img
                                                        src="https://xstore.8theme.com/elementor/demos/minimal-electronics/wp-content/uploads/sites/71/2022/02/Image-2.jpeg"
                                                        alt=""
                                                    />
                                                    <h2 className="my-[8px] text-[24px] font-medium leading-7">
                                                        Features
                                                    </h2>
                                                    <p className="text-[#444] mb-[12px]">
                                                        Auto Schedule - True360 Sound Technology featuring Bang &
                                                        Olufsen Signature Sound Auto Away - Premium materials are built
                                                        to last Remote Control - Connect button activates intelligent
                                                        features via Bang & Olufsen App Energy Star - Portable Bluetooth
                                                        speaker keeps going ...
                                                    </p>
                                                    <div className="underline text-[#222]">Show full details</div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
