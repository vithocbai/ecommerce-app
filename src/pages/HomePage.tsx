import HeroSection from "../components/HeroSection/HeroSection";
import CategoriesSection from "../components/Category/Category";

const HomePage = () => {
    return (
        <main className="w-full px-[15px] h-[10000px]">
            <div className="max-w-[1600px] max-lg:max-w-[940px] mx-auto">
                <HeroSection />
                <CategoriesSection />
            </div>
        </main>
    );
};

export default HomePage;
