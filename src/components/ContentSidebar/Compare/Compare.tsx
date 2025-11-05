import { HeaderSidebar } from "../../ui/HeaderSidebar";
import { RefreshCcw } from "lucide-react";

export const Compare = () => {
    return (
        <section>
            <div className="px-8 py-5">
                <HeaderSidebar title="COMPARE" icon={<RefreshCcw className="w-7 h-7"/>} />
                <div className="text-center text-[#222] mb-[20px]">No products in the compare.</div>
                <button className="block text-center text-white rounded-full mx-auto w-[170px] h-[37px] bg-[#2a74ed] hover:bg-black duration-300">
                    <a href="">Return To Shop</a>
                </button>
            </div>
        </section>
    );
};
