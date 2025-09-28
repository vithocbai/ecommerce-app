import { Search, RefreshCcw, Heart, UserRound, ShoppingBasket, TextAlignJustify, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ActionButton from "../ui/ActionButton";

function Header() {
    const [menu, setMenu] = useState(false);
    const tabs = [
        {
            id: "menu",
            label: "MENU",
        },
        {
            id: "categories",
            label: "CATEGORIES",
        },
    ];
    const [activeTab, setActiveTab] = useState("menu");

    const handleOpenMenu = () => {
        setMenu(!menu);
    };

    const variants = {
        enter: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.2 },
        },
        exit: {
            opcity: 0,
            x: -10,
            transition: { duration: 0.4 },
        },
    };

    return (
        <header className="w-full py-[10px] px-[10px] max-lg:py-[5px] max-md:px-[15px]">
            <div className="max-w-[1600px] mx-auto relative flex justify-between items-center h-[55px]">
                {/* Menu */}
                <button onClick={handleOpenMenu} className="lg:hidden">
                    <TextAlignJustify className="w-[24px] h-[24px]" />
                </button>

                {/* Logo */}
                <div className="max-w-[117px]">
                    <img className="w-[100%]" src="/logo/Logo.png" alt="XSTORE" />
                </div>

                {/* Navigation */}
                <nav className="max-lg:hidden flexCenter xl:ml-[120px]">
                    <ul className="flexCenter text-[#222] font-medium">
                        <li className="px-[8px]">
                            <a className="block px-[7px] py-[5px] hover:text-[#2A74ED]" href="">
                                Elements
                            </a>
                        </li>
                        <li className="px-[8px]">
                            <a className="block px-[7px] py-[5px] hover:text-[#2A74ED]" href="">
                                Shop
                            </a>
                        </li>
                        <li className="px-[8px]">
                            <a className="block px-[7px] py-[5px] hover:text-[#2A74ED]" href="block">
                                Track Order
                            </a>
                        </li>
                        <li className="px-[8px]">
                            <a className="block px-[7px] py-[5px] hover:text-[#2A74ED]" href="">
                                Blog
                            </a>
                        </li>
                        <li className="px-[8px]">
                            <a className="block px-[7px] py-[5px] hover:text-[#2A74ED]" href="">
                                About us
                            </a>
                        </li>
                        <li className="px-[8px]">
                            <a className="block px-[7px] py-[5px] hover:text-[#2A74ED]" href="">
                                Contacts
                            </a>
                        </li>
                    </ul>
                    {/* Search */}
                    <div>
                        <span className="block px-[7px] py-[5px]">
                            <Search className="w-[20px] h-[20px]" />
                        </span>
                    </div>
                </nav>

                {/* Action Right */}
                <div className="max-lg:hidden flexCenter gap-4">
                    <div>
                        <RefreshCcw className="w-[20px] h-[20px]" />
                    </div>
                    <div>
                        <Heart className="w-[20px] h-[20px]" />
                    </div>
                    <div className="flexCenter">
                        <UserRound className="w-[20px] h-[20px]" />
                        <span className="text-[#000] ml-[7px] text-[15px] font-medium">Sign In</span>
                    </div>

                    <button className="flexCenter gap-2 min-w-[130px] text-[15px] bg-[#2A74ED] py-[10px] rounded-[99px] text-white">
                        <ShoppingBasket className="w-[20px] h-[20px]" />
                        <span>Cart $0.00</span>
                    </button>
                </div>

                {/* ShoppingCard Tablet */}
                <button className="lg:hidden flexCenter rounded-[99px] text-white w-[40px] h-[40px] bg-[#2A74ED]">
                    <ShoppingBasket className="w-[20px] h-[20px]" />
                </button>

                {/* Overlay */}
                <AnimatePresence>
                    {menu && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleOpenMenu}
                            className="fixed inset-0 bg-[rgba(0,0,0,0.4)]"
                        />
                    )}
                </AnimatePresence>

                {/* Menu */}
                <AnimatePresence>
                    {menu && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "-0%" }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 left-0 bottom-0 w-[370px] bg-white px-[30px] py-5"
                        >
                            {/* Close */}
                            <div
                                onClick={handleOpenMenu}
                                className="absolute right-[-50px] top-[20px] flexCenter w-[35px] h-[35px] bg-white rounded-[99px]"
                            >
                                <X strokeWidth={0.6} />
                            </div>

                            <div className="flex flex-col gap-y-[18px]">
                                {/* Logo */}
                                <div className="max-w-[160px] mx-auto">
                                    <img className="w-[100%]" src="/logo/Logo.png" alt="XSTORE" />
                                </div>

                                {/* Search */}
                                <div className="border flex justify-between items-center ">
                                    <input
                                        className="h-[35px] px-3 focus:none border-none focus:outline-none text-[14px]"
                                        type="text"
                                        placeholder="Search for products..."
                                    />
                                    <button className="w-[35px] h-inherit text-[#222]">
                                        <Search className="w-[16px] h-[16px] mx-auto" />
                                    </button>
                                </div>

                                {/* navigation bar */}
                                <div className="grid grid-cols-2 border-b-[1px] text-[14px] text-[#444]">
                                    {tabs.map((tab) => {
                                        return (
                                            <h3
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`pb-[10px] px-1 text-center ${
                                                    activeTab === tab.id ? "border-b-[2px] border-[#444]" : ""
                                                }`}
                                            >
                                                {tab.label}
                                            </h3>
                                        );
                                    })}
                                </div>

                                {/* Tab Navigations */}
                                <AnimatePresence mode="wait">
                                    {activeTab === "menu" && (
                                        <motion.nav
                                            key="menu"
                                            initial="exit"
                                            animate="enter"
                                            exit="exit"
                                            variants={variants}
                                            className="uppercase text-[14px]"
                                        >
                                            <ul className="text-[#444]">
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        Elements
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        Shop
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="block">
                                                        Track Order
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        Blog
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        About us
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        Contacts
                                                    </a>
                                                </li>
                                            </ul>
                                        </motion.nav>
                                    )}

                                    {activeTab === "categories" && (
                                        <motion.nav
                                            key="categories"
                                            initial="exit"
                                            animate="enter"
                                            exit="exit"
                                            variants={variants}
                                            className="uppercase text-[14px]"
                                        >
                                            <ul className="text-[#444]">
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        Computer & PC
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        Smart Gadgets
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="block">
                                                        TV & Monitors
                                                    </a>
                                                </li>
                                                <li className="py-[14px] border-b-[1px]">
                                                    <a className="" href="">
                                                        Wearable Items
                                                    </a>
                                                </li>
                                            </ul>
                                        </motion.nav>
                                    )}
                                </AnimatePresence>

                                <div className="text-[#444] flex items-center gap-[7px] pb-[14px] border-b-[1px] text-[14px]">
                                    <Heart className="w-[16px] h-[16px]" />
                                    <span>WISHLIST</span>
                                </div>
                                <div className="text-[#444] flex items-center gap-[7px] pb-[14px] border-b-[1px] text-[14px]">
                                    <RefreshCcw className="w-[16px] h-[16px]" />
                                    <span>COMPARE</span>
                                </div>
                                <div className="text-[#444] flex items-center gap-[7px] pb-[14px] text-[14px]">
                                    <UserRound className="w-[16px] h-[16px]" />
                                    <span>ACCOUNT</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

export default Header;
