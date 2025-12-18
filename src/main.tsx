import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/utilities.css";
import './styles/scrollbar.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { ProductDetail } from "./components/ProductDetail/ProductDetail.tsx";

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
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
);
