import { Children, createContext, useContext, useState, type ReactNode } from "react";
import type { ShopProductProps } from "../data/shopProduct";

export type CartItem = ShopProductProps & {
    quantity: number;
};

type CartProviderProps = {
    children: ReactNode;
};
type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: ShopProductProps) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product: ShopProductProps) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id == product.id);
            if (existing) {
                // Nếu sản phẩm đã có trong giỏ, tăng số lượng
                return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
            } else {
                // // Nếu chưa có, thêm mới với quantity = 1
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };
    return <CartContext.Provider value={{ cartItems, addToCart }}>{children}</CartContext.Provider>;
};

// Hook để sử dụng Cart Context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
};
