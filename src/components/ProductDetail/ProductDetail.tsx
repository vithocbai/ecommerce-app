import { Link, useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import { ChevronRight } from "lucide-react";
import { sampleCategory } from "../../data/sampleCategory";

export const ProductDetail = () => {
    const location = useLocation();
    const product = location.state.product;

    // Tìm category name dựa vào categoryId
    const categoryIdName = sampleCategory.find((cat) => cat.id === product.categoryId)?.name || "";
    
    return (
        <section>
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <nav className="max-w-[1600px] flex items-center mx-auto my-[15px] px-[15px] text-[13px] text-[#666]">
                <ul className="flex items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <ChevronRight size={14} />
                    </li>
                    <li>{categoryIdName}</li>
                    <li>
                        <ChevronRight size={14} />
                    </li>
                    <li>{product.title}</li>
                </ul>
            </nav>

            {/* Chi tiết sản phẩm */}

            {/* Footer */}
            <Footer />
        </section>
    );
};
