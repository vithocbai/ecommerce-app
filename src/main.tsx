import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/utilities.css";
import "./styles/scrollbar.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { ProductDetail } from "./components/ProductDetail/ProductDetail.tsx";
import { CheckoutLayout } from "./components/CheckoutLayout/CheckoutLayout.tsx";
import { CheckoutShipping } from "./components/CheckoutLayout/CheckoutShipping.tsx";
import { CheckoutOrder } from "./components/CheckoutLayout/CheckoutOrder.tsx";
import { CheckoutCart } from "./components/CheckoutLayout/CheckoutCart.tsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/product/:slug",
        element: <ProductDetail />,
    },
    {
        path: "/checkout",
        element: <CheckoutLayout />,
        children: [
            { index: true, element: <CheckoutCart /> },
            { path: "shipping", element: <CheckoutShipping /> },
            { path: "order", element: <CheckoutOrder /> },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
);
