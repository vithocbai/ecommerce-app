import { HeaderSidebar } from "../../ui/HeaderSidebar";
import { UserRound, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const LoginForm = () => {
    const [isActive, setIsActive] = useState("login");
    const [isView, setIsView] = useState(true);
    const [isPass, setIsPass] = useState(true);

    const tabs = [
        {
            id: "login",
            label: "LOGIN",
        },
        {
            id: "register",
            label: "REGISTER",
        },
    ];

    return (
        <section className="px-8 py-5">
            <div>
                <HeaderSidebar title="SIGN IN" icon={<UserRound className="w-7 h-7" />} />
                <div>
                    <div className="grid grid-cols-2 mb-[15px] w-full border-b-[1px] border-[#666] ">
                        {tabs.map((tab, index) => {
                            return (
                                <h3
                                    className={`w-100% text-center px-[5px] ${
                                        tab.id === isActive ? "border-b-[1px] border-[#000] pb-[10px]" : ""
                                    }`}
                                    key={index}
                                    onClick={() => setIsActive(tab.id)}
                                >
                                    {tab.label}
                                </h3>
                            );
                        })}
                    </div>
                    {isActive === "login" && (
                        <form action="">
                            <div className="mb-5">
                                <label htmlFor="" className="block text-[#222] text-[14px] mb-[5px]">
                                    Username or email <span>*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 h-[36px] border-[1px] border-[#e1e1e1] outline-[#1b1818] outline-[1px]"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="" className="block text-[#222] text-[14px] mb-[5px]">
                                    Password <span>*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={`${isPass ? "password" : "text"}`}
                                        className="w-full px-4 h-[36px] border-[1px] border-[#e1e1e1] outline-[#1b1818] outline-[1px]"
                                    />
                                    <span
                                        onClick={() => {
                                            setIsView(!isView);
                                            setIsPass(!isPass);
                                        }}
                                        className="absolute right-[16px] top-[50%] translate-y-[-50%]"
                                    >
                                        {isView ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-[20px]">
                                <input className="w-3 h-3" type="checkbox" name="" id="" />
                                <span className="text-[#222] text-[14px]">Remember me</span>
                            </div>
                            <button className="block w-full py-[10.5px] rounded-full transform duration-150 ease-linear  bg-[#000] hover:bg-[#2a74ed] text-[16px] text-white ">
                                Login
                            </button>
                            <div className="text-center mt-5 text-[14px] text-[#222]">
                                <a href="">Lost your password?</a>
                            </div>
                        </form>
                    )}
                    {isActive === "register" && (
                        <form action="">
                            <div className="mb-5">
                                <label htmlFor="" className="block text-[#222] text-[14px] mb-[5px]">
                                    Email address <span>*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 h-[36px] border-[1px] border-[#e1e1e1] outline-[#1b1818] outline-[1px]"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="" className="block text-[#222] text-[14px] mb-[5px]">
                                    Password <span>*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={`${isPass ? "password" : "text"}`}
                                        className="w-full px-4 h-[36px] border-[1px] border-[#e1e1e1] outline-[#1b1818] outline-[1px]"
                                    />
                                    <span
                                        onClick={() => {
                                            setIsView(!isView);
                                            setIsPass(!isPass);
                                        }}
                                        className="absolute right-[16px] top-[50%] translate-y-[-50%]"
                                    >
                                        {isView ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    </span>
                                </div>
                            </div>

                            <button className="block w-full py-[10.5px] rounded-full transform duration-150 ease-linear  bg-[#000] hover:bg-[#2a74ed] text-[16px] text-white ">
                                REGISTER
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
