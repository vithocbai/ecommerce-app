import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";

interface FilterOption {
    value: string;
    label: string;
}

interface FilterBarProps {
    onFilterChange?: (filters: FilterState) => void;
    minPrice: number;
    maxPrice: number;
}

interface FilterState {
    category: string;
    priceRange: [number, number];
    color: string;
    rating: number;
}

export const FilterBar = () => {
    const [filters, setFilters] = useState({
        category: "",
        priceRange: [149, 1299],
        color: "",
        rating: 0,
    });

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const categories: FilterOption[] = [
        { value: "computer-pc", label: "Computer & PC" },
        { value: "smart-gadgets", label: "Smart Gadgets" },
        { value: "tv-monitors", label: "TV-Monitors" },
        { value: "wearable-items", label: "Wearable Items" },
    ];

    const colors: FilterOption[] = [
        { value: "black", label: "black" },
        { value: "blue", label: "blue" },
        { value: "red", label: "red" },
    ];

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown == dropdown ? null : dropdown);
    };

    const handleCategoryChange = (category: string) => {
        const newFilter = { ...filters, category };
        setFilters(newFilter);
        setOpenDropdown(null);
    };

    const clearCategory = () => {
        setFilters({ ...filters, category: "" });
    };

    return (
        <section>
            <div>
                <div className="grid grid-cols-5 gap-[25px]">
                    {/* Categories Dropdown */}
                    <div className="relative cursor-pointer">
                        <button
                            onClick={() => toggleDropdown("categories")}
                            className="flex items-center w-full gap-2 border-[1px] border-[#e1e1e1] rounded-full pl-4 pr-5 py-[6px] text-[#444]"
                        >
                            <div className="flex items-center gap-2 text-sm uppercase mr-auto min-w-[25%]">
                                <span
                                    className={`${filters.category} ? 'max-w-[100px] truncate overflow-hidden': 'max-w-full'`}
                                >
                                    CATEGORIES
                                </span>
                                {filters.category.length > 0 && (
                                    <div
                                        onClick={() => clearCategory()}
                                        className="group flex items-center gap-[2px] whitespace-nowrap text-[#555] rounded-sm text-[12px] bg-[#ddd] py-[5px] px-[7px]"
                                    >
                                        <span className="hidden group-hover:block">
                                            <X size={12} />
                                        </span>
                                        {filters.category}
                                    </div>
                                )}
                            </div>
                            <div>
                                {openDropdown ? (
                                    <ChevronDown className="" size={16} />
                                ) : (
                                    <ChevronUp className="" size={16} />
                                )}
                            </div>
                        </button>
                        {openDropdown === "categories" && (
                            <div className="absolute top-[100%] left-0 right-0 bg-white  border-[1px] border-[#e1e1e1] py-5 mt-[3px] mb-[10px]">
                                {categories.map((category) => (
                                    <span
                                        key={category.value}
                                        onClick={() => handleCategoryChange(category.value)}
                                        className={`block text-[18px] text-[#444] py-[5px] px-[20px] hover:bg-[#f1f1f1] transform duration-300 ease-linear ${
                                            filters.category === category.value ? "bg-[#f1f1f1]" : "bg-white"
                                        }`}
                                    >
                                        {category.label}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
