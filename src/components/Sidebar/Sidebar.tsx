import { LoginForm } from "../ContentSidebar/Auth/LoginForm";
import { Compare } from "../ContentSidebar/Compare/Compare";
import { WishList } from "../ContentSidebar/WishList/WishLish";
import { Cart } from "../ContentSidebar/Cart/Cart";
import { AnimatePresence, motion } from "framer-motion";

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
                        className="fixed w-[370px] z-[50] right-0 top-0 bottom-0 h-screen bg-white "
                    >
                        {renderContent()}
                    </motion.div>
                </section>
            )}
        </AnimatePresence>
    );
};
