import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

export const CheckoutLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const CHECKOUT_DURATION = 5 * 100;
    const STORAGE_KEY = "checkout_expires_at";

    // Đồng hồ đếm ngược
    const [timeLeft, setTimeLeft] = useState(0);

    const stepMap = [
        { id: 1, label: "Shopping cart", path: "/checkout" },
        { id: 2, label: "Checkout", path: "/checkout/shipping" },
        { id: 3, label: "Order status", path: "/checkout/order" },
    ];

    const currentStep = stepMap.find((step) => step.path === location.pathname)?.id || 1;

    useEffect(() => {
        const now = Date.now();
        const storePriseAt = localStorage.getItem(STORAGE_KEY);
        if (!storePriseAt) {
            localStorage.setItem(STORAGE_KEY, (now + CHECKOUT_DURATION * 1000).toString());
            return;
        }

        if (now >= Number(storePriseAt)) {
            localStorage.removeItem(STORAGE_KEY);
        }
    }, []);

    useEffect(() => {
        const interVal = setInterval(() => {
            const expriseAt = Number(localStorage.getItem(STORAGE_KEY));
            const diff = Math.max(0, Math.floor((expriseAt - Date.now()) / 1000));
            setTimeLeft(diff);
            if (diff === 0) {
                localStorage.removeItem(STORAGE_KEY);
            }
        }, 1000);
        return () => clearInterval(interVal);
    }, [navigate]);

    useEffect(() => {   
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },[location.pathname])

    return (
        <section>
            <Header />
            {/* Cart Step */}
            <div className="bg-[#fafafa]">
                <div className=" max-w-[1600px] mx-auto  py-[28px] mb-[26px]">
                    <ul className="flex justify-center">
                        {stepMap.map((step, index) => {
                            const isActive = step.id === currentStep;
                            // const isCompleted = step.id < currentStep;

                            return (
                                <li
                                    onClick={() => navigate(`${step.path}`)}
                                    key={index}
                                    className={`flex items-center text-[#9a9a9a] uppercase`}
                                >
                                    <span
                                        className={`w-[30px] h-[30px] border-[1px] border-[#e1e1e1] text-center text-[18px] mr-[7px] rounded-full
                                    ${isActive ? "text-[#fff] bg-black" : "text-[#9a9a9a] bg-transparent"}`}
                                    >
                                        {step.id}
                                    </span>
                                    <div className={`text-[21px] ${isActive ? "text-[#222]" : "text-[#9a9a9a]"}`}>{step.label}</div>
                                    {index < stepMap.length - 1 && (
                                        <span className="min-w-[120px] border-b-[1px] border-[#e1e1e1] mx-[20px]"></span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {timeLeft > 0 ? (
                        <p className="text-center pt-[26px]">
                            🔥Hurry up, these products are limited, checkout within {Math.floor(timeLeft / 60)}:
                            {(timeLeft % 60).toString().padStart(2, "0")}
                        </p>
                    ) : (
                        <p className="text-center pt-[23px]">
                            You are out of time! Checkout now to avoid losing your order!
                        </p>
                    )}
                </div>
            </div>

            {/* Step content */}
            <Outlet />

            <Footer />
        </section>
    );
};
