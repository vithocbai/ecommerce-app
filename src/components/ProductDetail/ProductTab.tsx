import { useState } from "react";
import { renderStars } from "../ui/renderStar";
import { Star } from "lucide-react";

export const ProductTab = () => {
    // Hiển thị Tab
    const [showProductTabs, setShowProductTabs] = useState("description");
    return (
        <section>
            <div className="p-[15px]">
                <div className="flex items-center border-b border-[#E5E5E5] pb-[15px] text-[20px]">
                    <button
                        onClick={() => setShowProductTabs("description")}
                        className={`${
                            showProductTabs === "description" ? "text-white  bg-[#3078EA]" : "bg-white text-[#999]"
                        } px-[25px] mr-5 rounded-full`}
                    >
                        <span className="block  px-5 font-medium py-[11px]">Description</span>
                    </button>
                    <button
                        onClick={() => setShowProductTabs("reviews")}
                        className={`${
                            showProductTabs === "reviews" ? "text-white  bg-[#3078EA]" : "bg-white text-[#999]"
                        } px-[25px] mx-5 rounded-full`}
                    >
                        <span className="block  px-5 font-medium py-[11px]">Reviews(1)</span>
                    </button>
                </div>

                {/* Descriptions */}
                {showProductTabs === "description" && (
                    <div className="pt-5">
                        {/* Overview Section */}
                        <div className="flex mt-[35px] max-lg:block">
                            <div className="w-[200px] text-[20px] text-[#222] font-medium p-[15px] flex-shrink-0 max-lg:w-full">
                                Overview
                            </div>
                            <div className="flex-1 p-[15px] text-[18px]">
                                <h2 className="text-[#222] text-[40px] font-medium leading-[1.1] mb-[25px]">
                                    Featuring True360 Sound Technology
                                </h2>
                                <p className="text-[18px] text-[#777] mb-[25px] leading-[1.8]">
                                    With its compact footprint and convenient leathers carrying handles the Beolit 17
                                    wireless Bluetooth speaker ready to accompany you on all of life's adventures
                                    Featuring 360-degrees sound technology the Beolit 17 lets you enjoying immersive
                                    Bang & Olufsen signature sound whenever and wherever you'd like Whether you're at
                                    home or on the road you can transform any moment with the power clarity portable.
                                </p>
                                <img
                                    src="/productDetail/Image-2.jpeg"
                                    alt="Product Overview"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="flex mt-[50px] max-lg:block">
                            <div className="w-[200px] text-[20px] text-[#222] font-medium p-[15px] flex-shrink-0 max-lg:w-full">
                                Features
                            </div>
                            <div className="flex-1 p-[15px] text-[18px]">
                                <div className="space-y-4">
                                    <div>
                                        <span className="font-medium text-[#222]">Auto Schedule - </span>
                                        <span className="text-[#777]">
                                            True360 Sound Technology featuring Bang & Olufsen Signature Sound
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-[#222]">Auto Away - </span>
                                        <span className="text-[#777]">Premium materials are built to last</span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-[#222]">Remote Control - </span>
                                        <span className="text-[#777]">
                                            Connect button activates intelligent features via Bang & Olufsen App
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-[#222]">Energy Star - </span>
                                        <span className="text-[#777]">
                                            Portable Bluetooth speaker keeps going with up to 24 hours of battery life
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What's Included Section */}
                        <div className="flex mt-[50px] mb-[50px] max-lg:block">
                            <div className="w-[200px] text-[20px] text-[#222] font-medium p-[15px] flex-shrink-0 max-lg:w-full">
                                What's Included
                            </div>
                            <div className="flex-1 p-[15px] text-[18px]">
                                <ul className="space-y-3 text-[#777]">
                                    <li>Beolit 17</li>
                                    <li>Power Adapter</li>
                                    <li>1.25m USB-A to USB-C cable</li>
                                    <li>Quick Start Guide</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reviews */}
                {showProductTabs === "reviews" && (
                    <div className="w-full flex pt-5 max-lg:block">
                        {/* Left Side Comment */}
                        <div className="w-1/2 max-lg:w-full pr-[15px]">
                            {/* Star */}
                            <div className="p-[30px] bg-[#f7f7f7] mb-8">
                                <h2 className="text-[42px] text-[#222] text-center font-medium mb-1">5.00</h2>
                                <div className="mx-auto text-center">
                                    <div className="flex items-center justify-center mb-[10px]">{renderStars(5)}</div>
                                    <p className="mb-[15px] text-[18px] text-[#222]">Based on 1 reviews</p>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">{renderStars(5)}</div>
                                        <div className="w-full h-[10px] bg-[#2e7d32] mx-[15px]"></div>
                                        <div className="text-[18px] text-[#444]">1</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">{renderStars(4)}</div>
                                        <div className="w-full h-[10px] bg-white mx-[15px]"></div>
                                        <div className="text-[18px] text-[#444]">0</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">{renderStars(3)}</div>
                                        <div className="w-full h-[10px] bg-white mx-[15px]"></div>
                                        <div className="text-[18px] text-[#444]">0</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">{renderStars(2)}</div>
                                        <div className="w-full h-[10px] bg-white mx-[15px]"></div>
                                        <div className="text-[18px] text-[#444]">0</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">{renderStars(1)}</div>
                                        <div className="w-full h-[10px] bg-white mx-[15px]"></div>
                                        <div className="text-[18px] text-[#444]">0</div>
                                    </div>
                                </div>
                            </div>
                            {/* Description*/}
                            <div>
                                <div className="text-[#222] text-[14px] mb-[14px] pb-[14px] uppercase font-medium border-b-[1px] boder-[#e1e1e1] ">
                                    1 review for Google – Nest Hello Smart Wi-Fi Video Doorbell
                                </div>
                                <p className="text-[18px] text-[#444] mb-5">There are no reviews yet.</p>
                            </div>
                        </div>

                        {/* Right Side: Add a Review Form */}
                        <form target="_self" className="w-1/2 max-lg:w-full pl-[15px]">
                            <div className="text-[#222] text-[14px] mb-[14px] pb-[14px] uppercase font-medium border-b-[1px] boder-[#e1e1e1] ">
                                Be the first to review “Google – Nest Hello Smart Wi-Fi Video Doorbell”
                            </div>
                            <p className="text-[18px] text-[#444] mb-5">
                                Your email address will not be published. Required fields are marked
                            </p>
                            <div className="mb-[18px]">
                                <p className="text-[#444] leading-9">
                                    Your rating <span>*</span>
                                </p>
                                <div className="flex items-center gap-[15px] cursor-pointer">
                                    {[1, 2, 3, 4, 5].map((starGroup) => {
                                        return (
                                            <div>
                                                <span
                                                    className={`flex items-center text-[#e1e1e1] hover:text-[#fdd835] transition-colors`}
                                                >
                                                    {Array.from({ length: starGroup }).map((_, i) => (
                                                        <Star key={i} size={16} fill="currentColor" />
                                                    ))}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>} */}
                            </div>
                            {/* Your Review Textarea */}
                            <div className="mb-4">
                                <label htmlFor="review" className="block text-[#444] mb-2 text-[15px]">
                                    Your review <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="review"
                                    rows={6}
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500 transition-colors"
                                ></textarea>
                            </div>

                            {/* Name Input */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-[#444] mb-2 text-[15px]">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500 h-[36px]"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-[#444] mb-2 text-[15px]">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500 h-[36px]"
                                />
                            </div>

                            {/* Checkbox Save Name */}
                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="save-info"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="save-info" className="ml-2 text-[14px] text-[#666]">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button className="bg-black text-white px-8 py-2 rounded-full font-medium hover:bg-[#3078EA] transition-colors">
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};
