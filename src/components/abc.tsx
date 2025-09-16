<div className="fixed top-0 left-0 bottom-0 w-[370px] bg-white px-[30px] py-5">
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
                    </div>