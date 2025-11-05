import { HeaderSidebar } from "../../ui/HeaderSidebar";
import { Heart } from "lucide-react";

export const WishList = () => {
    return (
        <section className="px-8 py-5">
            <div>
                <HeaderSidebar title="WISHLIST" icon={<Heart className="w-7 h-7" />} />
                <div className="text-center text-[#222] mb-[20px]">No products in the wishlist.</div>
                <button className="block text-center text-white rounded-full mx-auto w-[170px] h-[37px] bg-[#2a74ed]  hover:bg-black duration-300">
                    <a href="">Return To Shop</a>
                </button>
            </div>
        </section>
    );
};
