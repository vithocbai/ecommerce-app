import { Outlet,useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

export const CheckoutLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const stepMap = [
        { id: 1, label: "Shopping cart", path: "/checkout" },
        { id: 2, label: "Checkout", path: "/checkout/shipping" },
        { id: 3, label: "Order status", path: "/checkout/order" },
    ];

    const currentStep = stepMap.find((step) => step.path === location.pathname)?.id || 1;

    return (
        <section>
            <Header />
            {/* Cart Step */}
            <div className="bg-[#fafafa] py-[28px] mb-[26px]">
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
                                <div>{step.label}</div>
                                {index < stepMap.length - 1 && (
                                    <span className="min-w-[120px] border-b-[1px] border-[#e1e1e1] mx-[20px]"></span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            
            {/* Step content */}
            <Outlet />
            
            <Footer />
        </section>
    );
};
