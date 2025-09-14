import { Search, RefreshCcw, Heart, UserRound, ShoppingBasket } from "lucide-react";

function Header() {
    return (
        <header className="w-full py-[10px] px-[10px]">
            <div className="max-w-[1600px] relative flex justify-between items-center mx-auto h-[55px]">
                {/* Logo */}
                <div className="max-w-[117px]">
                    <img className="w-[100%]" src="/logo/Logo.png" alt="XSTORE" />
                </div>

                {/* Navigation */}
                <nav className="xl:ml-[60px] flexCenter">
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
                <div className="flexCenter gap-4">
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
                    <button className="flexCenter min-w-[130px] bg-[#2A74ED] py-[10px] rounded-[99px] text-white">
                        <ShoppingBasket className="w-[20px] h-[20px]" />
                        <span className="ml-[7px] text-[15px]">Cart $0.00</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
