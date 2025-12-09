import { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
    return (
        <CartProvider>
            <Header />
            <HomePage />
            <Footer />
        </CartProvider>
    );
}

export default App;
