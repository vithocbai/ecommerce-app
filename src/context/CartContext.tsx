import { Children, createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ShopProductProps } from "../data/shopProduct";

export type CartItem = ShopProductProps & {
    quantity: number;
};

type CartProviderProps = {
    children: ReactNode;
};
type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: ShopProductProps, quantity?: number) => void;
    removeTocart: (product: ShopProductProps) => void;
    removeToCartAll: () => void;
    subTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product: ShopProductProps, quantity = 1) => {
        if (quantity < 1) return;
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                // Nếu sản phẩm đã có trong giỏ, tăng số lượng
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                // // Nếu chưa có, thêm mới với quantity = 1
                return [...prev, { ...product, quantity }];
            }
        });
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeTocart = (product: ShopProductProps) => {
        setCartItems((prev) => prev.filter((item) => item.id !== product.id));
    };

    // Xóa tất cả sản phẩm khỏi giỏ hàng
    const removeToCartAll = () => {
        const isConfirm = window.confirm("Bạn có chắc muốn xóa tất cả sản phẩm")
        if(isConfirm) {
            setCartItems([]);
        }
    };

    // Tính tổng sản phẩm
    const subTotal = cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);

    // Mỗi lần cartItems thay đổi -> lưu vào localStorage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, subTotal, removeTocart, removeToCartAll }}>{children}</CartContext.Provider>
    );
};

// Hook để sử dụng Cart Context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
};
