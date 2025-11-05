import { useEffect, useState } from "react";
import { LoginForm } from "../ContentSidebar/Auth/LoginForm";
import { Compare } from "../ContentSidebar/Compare/Compare";
import { WishList } from "../ContentSidebar/WishList/WishLish";

type SidebarProps = {
    open: boolean;
    close: () => void;
    type: string;
};

export const Sidebar = ({ open, close, type }: SidebarProps) => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle visibility with delay for exit animation
    useEffect(() => {
        if (open) {
            setIsVisible(true);
        } else {
            // Delay unmount to allow exit animation
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [open]);

    const renderContent = () => {
        switch (type) {
            case "COMPARE":
                return <Compare />;
            case "WISHLIST":
                return <WishList />;
            case "SIGNIN":
                return <LoginForm />;
            default:
                return "No content";
        }
    };

    if (!isVisible) return null;

    return (
        <section className="fixed inset-0 z-[60] overflow-hidden">
            <div className={open ? "pointer-events-auto" : "pointer-events-none"}>
                {/* Overlay */}
                <div
                    className={`fixed inset-0 h-screen bg-black transition-opacity duration-200 ${
                        open ? "opacity-30 cursor-pointer" : "opacity-0"
                    }`}
                    onClick={close}
                />

                {/* Sidebar */}
                <aside
                    style={{ width: 370 }}
                    className={`fixed right-0 top-0 h-screen bg-white overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        open ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {renderContent()}
                </aside>
            </div>
        </section>
    );
};
