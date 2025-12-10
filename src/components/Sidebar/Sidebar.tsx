import { LoginForm } from "../ContentSidebar/Auth/LoginForm";
import { Compare } from "../ContentSidebar/Compare/Compare";
import { WishList } from "../ContentSidebar/WishList/WishLish";
import { Cart } from "../ContentSidebar/Cart/Cart";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type SidebarProps = {
    open: boolean;
    close: () => void;
    type?: string;
};

export const Sidebar = ({ open, close, type }: SidebarProps) => {
    const renderContent = () => {
        switch (type) {
            case "COMPARE":
                return <Compare />;
            case "WISHLIST":
                return <WishList />;
            case "SIGNIN":
                return <LoginForm />;
            case "ADDTOCART":
                return <Cart />;
            default:
                return "No content";
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <section className="fixed inset-0 z-[50] overflow-hidden">
                    {/* Close */}
                    <div
                        onClick={close}
                        className="absolute z-[60] top-4 right-[380px] max-md:left-3 w-8 h-8 bg-white rounded-full flexCenter cursor-pointer"
                    >
                        <X strokeWidth={1.5} size={20} className="text-[#222] text-center" />
                    </div>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                        className="fixed inset-0 h-screen z-[40] bg-[rgba(0,0,0,0.4)]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed w-[370px] max-md:w-[86%] z-[50] right-0 top-0 bottom-0 h-screen bg-white "
                    >
                        {renderContent()}
                    </motion.div>
                </section>
            )}
        </AnimatePresence>
    );
};
