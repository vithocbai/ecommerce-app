import HeroSection from "../components/HeroSection/HeroSection";
import CategoriesSection from "../components/Category/Category";
import ProductHotspotSection from "../components/ProductHotspotSection/ProductHotspotSection";
import ResponsiveWrapper from "../components/ResponsiveWrapper/ResponsiveWrapper";

const HomePage = () => {
    return (
        <ResponsiveWrapper className="w-full">
            <main className="w-full px-[15px] h-[10000px]">
                <div className="max-w-[1600px] max-[1200px]:max-w-[940px] max-[990px]:max-w-[736px] mx-auto">
                    <HeroSection />
                    <CategoriesSection />
                    <ProductHotspotSection />
                </div>
            </main>
        </ResponsiveWrapper>
    );
};

export default HomePage;
