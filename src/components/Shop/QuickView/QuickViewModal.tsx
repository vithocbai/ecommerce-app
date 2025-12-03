import { X, Eye, RefreshCcw, Heart, Twitter, Facebook, Linkedin, PhoneOutgoing, ChevronUp } from "lucide-react";
import { renderStars } from "../../ui/renderStar";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const QuickViewModal = ({ isOpen, onClose }: Props) => {
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
                                className="fixed top-0 right-0 z-[50]  w-[400px] h-screen bg-white"
                            >
                                {/* Close Button */}
                                <div
                                    onClick={() => onClose()}
                                    className="flexCenter cursor-pointer absolute top-2 left-[-50px] bg-white rounded-full w-[36px] h-[36px]"
                                >
                                    <X size={14} />
                                </div>
                                {/* Content */}
                                <div>
                                    <h3>
                                        <a href="">Hi-Resolution Bluetooth 4.0 Wireless Speakers</a>
                                    </h3>
                                    {/* Image */}
                                    <div>
                                        <div>
                                            <img src="/productCard/img2.jpeg" alt="" />
                                        </div>
                                        {/* Navigation Arrow */}
                                        <div></div>
                                    </div>
                                    {/* Price */}
                                    <div>
                                        <span>
                                            <del>$320.00</del>
                                        </span>
                                        <span>$80</span>
                                    </div>
                                    {/* Rating */}
                                    <div className="flex items-center gap-[2px]">{renderStars(5)}</div>
                                    {/* View people */}
                                    <p className="flex items-center gap-[2px]">
                                        <span>
                                            <Eye className="w-[16px]" />
                                        </span>
                                        19 people are viewing this product right now
                                    </p>
                                    {/* Description */}
                                    <p>
                                        This Bluetooth speaker delivers big sound, making it then only music system
                                        you’ll need in or out of the house. Prem materials such as anodized aluminum &
                                        durable polymers withstand the rigor of an active lifestyle.
                                    </p>
                                    {/* Add to Cart */}
                                    <div>
                                        <div className="flex items-center gap-[2px]">
                                            <span>+</span>
                                            <div>4</div>
                                            <span>-</span>
                                        </div>
                                        <button>Add to Cart</button>
                                    </div>
                                    {/* Reaload */}
                                    <div className="flex items-center gap-[2px]">
                                        <RefreshCcw className="w-[16px]" />
                                        <p>Add to compare</p>
                                    </div>
                                    {/* Heart */}
                                    <div>
                                        <Heart className="w-[16px]" />
                                        <p>Add to wishlist</p>
                                    </div>
                                    {/* Skud */}
                                    <div>
                                        <span>skud: 1231-1</span>
                                    </div>
                                    {/* Category */}
                                    <div>
                                        <span>Category, Computer & PC </span>
                                    </div>
                                    {/* Tags */}
                                    <div>
                                        <span>Headphones, Speaker,</span>
                                    </div>
                                    {/* Share */}
                                    <div className="flex items-center">
                                        <span>Share:</span>
                                        <span>
                                            <Twitter />
                                        </span>
                                        <span>
                                            <Facebook />
                                        </span>
                                        <span>
                                            <Linkedin />
                                        </span>
                                        <span>
                                            <PhoneOutgoing />
                                        </span>
                                    </div>
                                    {/* More Detail */}
                                    <div>
                                        <div>
                                            More Detail{" "}
                                            <span>
                                                <ChevronUp />
                                            </span>
                                        </div>
                                        <div>
                                            <h2>Overview</h2>
                                            <h2>Featuring True360 Sound Technology</h2>
                                            <p>
                                                With its compact footprint and convenient leathers carrying handles the
                                                Beolit 17 wireless Bluetooth speaker ready to accompany you on all of
                                                life’s adventures Featuring 360-degrees sound technology the Beolit 17
                                                lets you enjoying immersive Bang & Olufsen signature sound whenever and
                                                wherever you'd like Whether you’re at home or on the road you can
                                                transform any moment with the power clarity portable.
                                            </p>
                                            <img src="" alt="" />
                                            <h2>Features</h2>
                                            <p>
                                                Auto Schedule - True360 Sound Technology featuring Bang & Olufsen
                                                Signature Sound Auto Away - Premium materials are built to last Remote
                                                Control - Connect button activates intelligent features via Bang &
                                                Olufsen App Energy Star - Portable Bluetooth speaker keeps going ...
                                            </p>
                                            <div>Show full details</div>
                                        </div>
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
