import { ChevronRight } from "lucide-react";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { HeroBannerShop } from "../components/HeroBannerShop/HeroBannerShop";


function Shop() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <section>
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <nav
                aria-label="breadcrumb"
                className="max-w-[1600px] flex items-center mx-auto my-[15px] px-[15px] text-[13px] text-[#666]"
            >
                <ul className="flex items-center">
                    <li className="hover:text-[#666666A8]">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <ChevronRight size={14} />
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <li key={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</li>
                        ) : (
                            <li key={name} className="breadcrumb-item">
                                <Link to={routeTo}>{name.charAt(0).toUpperCase()}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Page Header */}
            <div className="text-center px-[22%] mb-[45px]">
                <h2 className="text-[40px] text-[#222] font-medium mb-[20px]">The Shop</h2>
                <p className="text-[18px] text-[#666]">
                    Sit euismod mi quam in vulputate amet in. Tincidunt scelerisque convallis amet id et viverra euismod
                    aliquam. Tellus malesuada commodo fames laoreet.
                </p>
            </div>

            {/* FilterBar */}
            <FilterBar />

            {/* HeroBannerShop */}
            <HeroBannerShop />
            
            {/* Footer */}
            <Footer />
        </section>
    );
}

export default Shop;
