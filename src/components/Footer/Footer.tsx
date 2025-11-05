import { Facebook, Youtube, Instagram, Tv, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <section className="bg-[#32373C]">
            <div className="w-full px-[15px]">
                {/* Footer Top */}
                <ul className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:grid-cols-1 gap-x-5 pt-5 pb-[15px] border-b-[1px] border-[#464D54]">
                    <li className="flex items-center max-lg:mb-6">
                        <div className="mr-[25px]">
                            <img className="max-w-[50px] object-cover w-full h-auto" src="/footer/img1.png" alt="" />
                        </div>
                        <div>
                            <h3 className="text-16px text-white mb-[10px]">Free Shipping Order $60</h3>
                            <p className="text-[14px] text-[#aaa]">Delivery Moves So Quickly</p>
                        </div>
                    </li>
                    <li className="flex items-center max-lg:mb-6">
                        <div className="mr-[25px]">
                            <img className="max-w-[50px] object-cover w-full h-auto" src="/footer/img2.png" alt="" />
                        </div>
                        <div>
                            <h3 className="text-16px text-white mb-[10px]">Easy & Fast Returns</h3>
                            <p className="text-[14px] text-[#aaa]">30 Days Free Return Policy</p>
                        </div>
                    </li>
                    <li className="flex items-center max-md:mb-6">
                        <div className="mr-[25px]">
                            <img className="max-w-[50px] object-cover w-full h-auto" src="/footer/img3.png" alt="" />
                        </div>
                        <div>
                            <h3 className="text-16px text-white mb-[10px]">24/7 Customer Support</h3>
                            <p className="text-[14px] text-[#aaa]">Online Help By Our Agents </p>
                        </div>
                    </li>
                    <li className="flex items-center max-md:mb-6">
                        <div className="mr-[25px]">
                            <img className="max-w-[50px] object-cover w-full h-auto" src="/footer/img4.png" alt="" />
                        </div>
                        <div>
                            <h3 className="text-16px text-white mb-[10px]">100% Secure Payments</h3>
                            <p className="text-[14px] text-[#aaa]">PayPal / MasterCard / Visa </p>
                        </div>
                    </li>
                </ul>
                {/* Footer Middle */}
                <div className="mt-[65px] max-md:mt-[30px] pb-[65px] max-md:pb-[30px]  flex max-md:block w-full border-b-[1px] border-[#464D54]">
                    {/* Column 1 */}
                    <div className="pr-5 w-[17%] max-md:w-full max-md:mb-[38px]">
                        <h3 className="text-[#999] text-[16px] uppercase font-semibold">COMPANY</h3>
                        <ul className="">
                            <li>
                                <a href="" className="block text-[#fff] text-[15px] pt-[6px] pb-[3px]">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px] pb-[3px]">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px] pb-[3px]">
                                    Affiliates
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px] pb-[3px]">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="pr-5 w-[17%] max-md:w-full max-md:mb-[38px]">
                        <h3 className="text-[#999] text-[16px] uppercase font-semibold">SHOP</h3>
                        <ul>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px] pt-[6px] pb-[3px]">
                                    Appliances
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px]  pb-[3px]">
                                    Gedgets
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px]  pb-[3px]">
                                    Wearables
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px]  pb-[3px]">
                                    Shop All
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="pr-5 w-[23%] max-md:w-full max-md:mb-[38px] border-r-[1px] border-[#464D54]">
                        <h3 className="text-[#999] text-[16px] uppercase font-semibold">SUPPORT</h3>
                        <ul>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px] pt-[6px] pb-[3px]">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px]  pb-[3px]">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px]  pb-[3px]">
                                    Frequently Asked Questions
                                </a>
                            </li>
                            <li>
                                <a href="" className="block text-[#fff] text-[15px]  pb-[3px]">
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="w-[43%] max-md:w-full">
                        <div className="pl-[25%] max-lg:pl-[5%] max-md:pl-0">
                            <h3 className="mb-5 text-[#999] text-[16px] uppercase font-semibold">SUBSCRIBE</h3>
                            <div className="mb-5 text-[15px] text-[#FFFBFB]">
                                Enter your email address to get
                                <a
                                    href=""
                                    className="font-bold underline  underline-offset-1 [text-decoration-skip-ink:none]"
                                >
                                    $20 off your first order
                                </a>
                            </div>
                            <div className="flex justify-between bg-white h-10 border border-[#e1e1e1] mb-5">
                                <input
                                    className="border-none outline-none leading-10 px-4 text-[#222] text-[16px]"
                                    type="email"
                                    placeholder="Your E-mail Address"
                                />
                                <input
                                    className="px-[15px] border-none outline-none h-full text-[12px] uppercase text-[#fff] bg-[#2a74ed] "
                                    type="submit"
                                    value="Send"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <a href="" className="text-[#999999]">
                                    <Facebook />
                                </a>
                                <a href="" className="text-[#999999]">
                                    <Twitter />
                                </a>
                                <a href="" className="text-[#999999]">
                                    <Instagram />
                                </a>
                                <a href="" className="text-[#999999]">
                                    <Youtube />
                                </a>
                                <a href="" className="text-[#999999]">
                                    <Tv />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="mt-[35px] pb-[35px] flex max-md:block items-center">
                    {/* logo */}
                    <a href="" className="w-[117px]">
                        <img className="" src="./logo/footer-logo.png" alt="" />
                    </a>

                    <div className="w-[61%] max-md:w-full mx-5 max-md:mx-0 max-md:py-5">
                        {/* Info */}
                        <div className="flex flex-wrap mb-[15px]">
                            <div className="text-white text-[15px] pr-[10px] first:pl-[0]">
                                <div>
                                    Phone: <span className="text-[#ccc]"> 888.312.2456.</span>
                                </div>
                                {/* <span className="text-[#ccc]"> 888.312.2456. </span> */}
                            </div>
                            <div className="text-white text-[15px] pr-[10px]">
                                <div>
                                    Text: <span className="text-[#ccc]"> 200.490.1520 </span>
                                </div>
                            </div>
                            <div className="text-white text-[15px] pr-[10px]">
                                <div>
                                    Email: <span className="text-[#ccc]"> hoang15tq@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex  text-white text-[15px] pr-[10px]">
                                <div>
                                    Hours: <span className="text-[#ccc]"> Monday - Friday 8:30am - 4:45pm EST </span>
                                </div>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className="flex-wrap text-[#ccc] text-[15px]">
                            Copyright © 2024
                            <a href="" className="text-white">
                                XStore Theme
                            </a>
                            . Created by Nguyễn Đức Hoàng –
                            <a href="" className="text-white">
                                Premium WordPress WooCommerce Themes
                            </a>
                        </div>
                    </div>

                    {/* Bank */}
                    <div className="ml-auto">
                        <a href="" className="w-full">
                            <img src="./payment/Payment.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
