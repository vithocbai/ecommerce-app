import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/utilities.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop.tsx";
import { CartProvider } from "./context/CartContext.tsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
);
