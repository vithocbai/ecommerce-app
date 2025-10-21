import { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    );
}

export default App;
