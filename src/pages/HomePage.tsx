import HeroSection from "../components/HeroSection/HeroSection";
import CategoriesSection from "../components/Category/Category";
import ProductHotspotSection from "../components/ProductHotspotSection/ProductHotspotSection";
import ResponsiveWrapper from "../components/ResponsiveWrapper/ResponsiveWrapper";
import { ProductTrending } from "../components/ProductTrending/ProductTrending";
import { sampleProducts } from "../data/sampleProducts";
import { sampleProductPromo } from "../data/sampleProductPromo";
import { ProductPromoSection } from "../components/ProductPromoSection/ProductPromoSection";
import { TestimonialsSection } from "../components/TestimonialsSection/TestimonialsSection";
import { dataPopularArticle } from "../data/samplePupularArticle";
import { PopularArticles } from "../components/PopularArticles/PopularArticles";
import { BrandSection } from "../components/Brand/BrandSection";
import { Sidebar } from "lucide-react";
import { useState } from "react";

const HomePage = () => {
    
    return (
        <ResponsiveWrapper className="w-full">
            <main className="w-full px-[15px]">
                <div className="max-w-[1600px] max-[1200px]:max-w-[940px] max-[990px]:max-w-[736px] mx-auto">
                    <HeroSection />
                    <CategoriesSection />
                    <ProductHotspotSection />
                    <ProductTrending products={sampleProducts} />
                    <ProductPromoSection productPromos={sampleProductPromo} />
                    <TestimonialsSection />
                    <PopularArticles poppularArticles={dataPopularArticle} />
                    <BrandSection />
                </div>
            </main>
        </ResponsiveWrapper>
    );
};

export default HomePage;
