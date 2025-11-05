import type { ReactNode } from "react";

interface HeaderSidebarProps {
    title: string;
    icon: ReactNode;
}

export const HeaderSidebar: React.FC<HeaderSidebarProps> = ({ title, icon }) => {
    return (
        <section>
            <h3 className="flex items-center justify-center gap-2 text-[#222] border-b-[1px] border-[#e1e1e1] pb-[15px] mb-[15px] ">
                <span>{icon}</span>
                <div className="relative text-[18px] font-normal group">
                    <span>{title}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1.2px] bg-black scale-x-0 origin-right transition-transform duration-300 ease-linear group-hover:scale-x-100 group-hover:origin-left"></span>
                   
                </div>
            </h3>
        </section>
    );
};
