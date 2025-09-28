import TypewriterLoop from "../TypewriterLoop/TypewriterLoop";
import { ShoppingCart } from "lucide-react";

function HeroSection() {
    return (
        <div className="w-full">
            <div
                className="min-h-[580px] bg-center bg-no-repeat bg-cover rounded-[20px] relative"
                style={{ backgroundImage: "url('banner/banner.jpeg')" }}
            >
                <div className="max-w-[491px] max-lg:w-[330px] ml-[80px] mr-[40px] max-lg:mx-[15px] absolute top-[50%] translate-y-[-50%]">
                    <h4 className="text-[12px] text-[#444] uppercase tracking-[2px]">The Next generation</h4>
                    <h2 className="text-[58px] max-lg:text-[32px] font-medium">Innovation That</h2>
                    <TypewriterLoop
                        texts={["Drives Emotion", "Changed The World"]}
                        typeSpeed={80}
                        pauseTime={1500}
                        className="text-[58px] max-lg:text-[32px] text-[#222] font-medium lg:whitespace-nowrap"
                        cursorClassName="inline-block w-1 h-10 bg-blue-500 ml-1 animate-pulse"
                    />
                    <p className="text-[18px] text-[#444] mt-[20px] mb-[40px] max-sm:hidden">
                        Get instant alerts for anyone who approaches, even if they don’t press the headphone.
                    </p>

                    <button className="max-sm:mt-[10px] flexCenter gap-2 w-[219px] h-[56px] bg-[#2A74ED] text-[18px] font-semibold text-white rounded-[99px] transition-colors duration-300 ease-linear hover:bg-[#000]">
                        <ShoppingCart className="w-[19px] h-[19px]" />
                        <span>Buy Now - $320</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
