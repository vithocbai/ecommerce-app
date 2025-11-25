import { ChevronDown, ChevronUp, X, Star, Search } from "lucide-react";
import { useState } from "react";
import { renderStars } from "../ui/renderStar";

interface FilterOption {
    value: string;
    label: string;
}

interface FilterRating {
    rating: number;
    label: string;
    value: string;
}

interface FilterState {
    category: string;
    priceRange: [number, number];
    color: string;
    rating: number;
}

export const FilterBar: React.FC = () => {
    const [filters, setFilters] = useState({
        category: "",
        priceRange: [149, 1299],
        color: "",
        rating: 0,
    });

    const [dropdownState, setDropdownState] = useState({
        categories: false,
        price: false,
        color: false,
        rating: false,
    });

    const [tempPriceRange, setTempPriceRange] = useState<[number, number]>([149, 1299]);
    const [showPrice, setShowPrice] = useState(false);
    const minPrice = 149;
    const maxPrice = 1300;
    const step = 1;

    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

    const categories: FilterOption[] = [
        { value: "computer-pc", label: "Computer & PC" },
        { value: "smart-gadgets", label: "Smart Gadgets" },
        { value: "tv-monitors", label: "TV-Monitors" },
        { value: "wearable-items", label: "Wearable Items" },
    ];

    const colors: FilterOption[] = [
        { value: "black", label: "#000" },
        { value: "blue", label: "#1e73be" },
        { value: "red", label: "#dd3333" },
    ];

    const ratings: FilterRating[] = [
        { rating: 5, label: "5", value: "Rated 5 out of 5 5" },
        { rating: 4, label: "4 & Up", value: "Rated 4 out of 5 4" },
        { rating: 3, label: "3 & Up", value: "Rated 3 out of 5 3" },
        { rating: 2, label: "2 & Up", value: "Rated 2 out of 5 2" },
        { rating: 1, label: "1 & Up", value: "Rated 1 out of 5 1" },
    ];

    const toggleDropdown = (dropdown: keyof typeof dropdownState) => {
        setDropdownState((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
    };

    const handleCategoryChange = (category: string) => {
        const newFilter = { ...filters, category };
        setFilters(newFilter);
    };

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), tempPriceRange[1] - 1);
        setTempPriceRange([value, tempPriceRange[1]]);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), tempPriceRange[0] + 1);
        setTempPriceRange([tempPriceRange[0], value]);
    };

    const handleColorClick = (value: string) => {
        setSelectedColors((prev) => (prev.includes(value) ? prev.filter((e) => e !== value) : [...prev, value]));
    };

    const handleStarClick = (value: string) => {
        setSelectedRatings((prev) => (prev.includes(value) ? prev.filter((e) => e !== value) : [...prev, value]));
    };

    const clearCategory = () => {
        setFilters({ ...filters, category: "" });
    };

    const clearPrice = () => {
        setShowPrice(false);
        setTempPriceRange([149, 1299]);
    };

    return (
        <section>
            <div className="max-w-[1600px] mx-auto mb-[25px] px-[15px]">
                <div className="grid grid-cols-[1fr_auto] max-md:grid-cols-1 items-center gap-[25px] w-[full]">
                    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-md:grid-cols-1 gap-[25px] ">
                        {/* Categories Dropdown */}
                        <div className="relative cursor-pointer">
                            <button
                                onClick={() => toggleDropdown("categories")}
                                className="flex items-center w-full gap-2 border-[1px] border-[#e1e1e1] rounded-full pl-4 pr-5 py-[9px] text-[#444]"
                            >
                                <div className="flex items-center gap-2 text-sm uppercase ">
                                    <div
                                        className={`${filters.category} ? 'max-w-[100px] truncate overflow-hidden': 'max-w-full' `}
                                    >
                                        CATEGORIES
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    {filters.category.length > 0 && (
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation(), clearCategory();
                                            }}
                                            className="group flex items-center gap-[2px] whitespace-nowrap text-[#555] rounded-sm text-[12px] bg-[#ddd] py-[5px] px-[7px]"
                                        >
                                            <span className="hidden group-hover:block">
                                                <X size={12} />
                                            </span>
                                            {filters.category}
                                        </div>
                                    )}
                                </div>
                                <div className="">
                                    {dropdownState.categories ? (
                                        <ChevronUp className="" size={16} />
                                    ) : (
                                        <ChevronDown className="" size={16} />
                                    )}
                                </div>
                            </button>
                            {dropdownState.categories && (
                                <div className="absolute z-[10] top-[100%] left-0 right-0 bg-white  border-[1px] border-[#e1e1e1] py-5 mt-[3px] mb-[10px]">
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

                        {/* Price */}
                        <div>
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown("price")}
                                    className="flex items-center justify-between w-full gap-2 border-[1px] border-[#e1e1e1] rounded-full pl-4 pr-5 py-[9px] text-[#444]"
                                >
                                    <div className=" truncate overflow-hidden text-[14px] uppercase">
                                        Price
                                    </div>
                                    {showPrice && (
                                        <div
                                            onClick={() => clearPrice()}
                                            className="group flex items-center gap-[2px] ml-auto whitespace-nowrap text-[#555] rounded-sm text-[12px] bg-[#ddd] py-[5px] px-[7px]"
                                        >
                                            <span className="hidden group-hover:block">
                                                <X size={12} />
                                            </span>
                                            <span>
                                                ${tempPriceRange[0]} - ${tempPriceRange[1]}
                                            </span>
                                        </div>
                                    )}
                                    <div className="">
                                        {dropdownState.price ? (
                                            <ChevronUp className="" size={16} />
                                        ) : (
                                            <ChevronDown className="" size={16} />
                                        )}
                                    </div>
                                </button>
                                {dropdownState.price && (
                                    <div>
                                        <div className="absolute z-[10] top-[100%] left-0 right-0 bg-white  border-[1px] border-[#e1e1e1] py-5 px-4  mt-[3px] mb-[10px]">
                                            {/* Range Slider */}
                                            <div className="relative ">
                                                {/*Track background */}
                                                <div className="absolute bg-gray-200 w-full h-[3px] rounded"></div>

                                                {/* Active track */}
                                                <div
                                                    className="absolute h-[3px] bg-blue-500 rounded"
                                                    style={{
                                                        left: `${
                                                            ((tempPriceRange[0] - minPrice) / (maxPrice - minPrice)) *
                                                            100
                                                        }%`,
                                                        right: `${
                                                            100 -
                                                            ((tempPriceRange[1] - minPrice) / (maxPrice - minPrice)) *
                                                                100
                                                        }%`,
                                                    }}
                                                ></div>

                                                {/* Min slider */}
                                                <input
                                                    type="range"
                                                    min={minPrice}
                                                    max={maxPrice}
                                                    step={step}
                                                    value={tempPriceRange[0]}
                                                    onChange={handleMinChange}
                                                    onMouseDown={() => setShowPrice(true)}
                                                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                                                />

                                                {/* Max slider */}
                                                <input
                                                    type="range"
                                                    min={minPrice}
                                                    max={maxPrice}
                                                    step={step}
                                                    value={tempPriceRange[1]}
                                                    onChange={handleMaxChange}
                                                    onMouseDown={() => setShowPrice(true)}
                                                    className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                                                />
                                            </div>

                                            {/* Price Display */}
                                            <div className="text-[#444] mt-4">
                                                Price:
                                                <span className="text-[14px]">
                                                    ${tempPriceRange[0]} — ${tempPriceRange[1]}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Color */}
                        <div>
                            <div className="relative ">
                                <button
                                    onClick={() => toggleDropdown("color")}
                                    className="overflow-hidden flex items-center justify-between w-full gap-2 border-[1px] border-[#e1e1e1] rounded-full pl-4 pr-5 py-[9px] text-[#444]"
                                >
                                    <div>Color</div>
                                    <div className="ml-auto uppercase flex items-center gap-[4px] max-w-[140px] overflow-hidden">
                                        {selectedColors.map((color) => {
                                            return (
                                                <div
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleColorClick(color);
                                                    }}
                                                    className="group flex items-center gap-[2px] whitespace-nowrap text-[#555] rounded-sm text-[12px] bg-[#ddd] py-[5px] px-[7px]"
                                                >
                                                    <span key={color} className="hidden group-hover:block">
                                                        <X size={12} />
                                                    </span>
                                                    {color}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="">
                                        {dropdownState.color ? (
                                            <ChevronUp className="" size={16} />
                                        ) : (
                                            <ChevronDown className="" size={16} />
                                        )}
                                    </div>
                                </button>
                                {/* Color Display  */}
                                {dropdownState.color && (
                                    <div className="absolute z-[10] top-[100%] left-0 right-0 bg-white border-[1px] border-[#e1e1e1] py-5 px-4 mt-[3px] mb-[10px]">
                                        <div className="flex">
                                            {colors.map((color) => {
                                                return (
                                                    <div
                                                        onClick={() => handleColorClick(color.value)}
                                                        className={`group relative mx-[5px] mb-[14px] w-[24px] h-[24px] rounded-full py-[5px] border-[#e1e1e1] border-[1px] cursor-pointer`}
                                                        style={{ background: `${color.label}` }}
                                                    >
                                                        <div className="absolute top-[110%] left-[-10px] text-[12px] text-[#555] border-[1px] border-[#e1e1e1] bg-white overflow-hidden py-[1] leading-5 px-[10px] capitalize h-0 opacity-0 invisible group-hover:h-full  group-hover:opacity-100 group-hover:visible duration-200 ease-linear">
                                                            {color.value}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown("rating")}
                                className="flex items-center justify-between w-full gap-2 border-[1px] border-[#e1e1e1] rounded-full pl-4 pr-5 py-[9px] text-[#444]"
                            >
                                <div className=" truncate overflow-hidden text-[14px] uppercase">Rating</div>
                                <div className="ml-auto uppercase flex items-center gap-[4px] max-w-[140px] overflow-hidden">
                                    {selectedRatings.map((rating) => {
                                        return (
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation(), handleStarClick(rating);
                                                }}
                                                className="group flex items-center gap-[2px] whitespace-nowrap text-[#555] rounded-sm text-[12px] bg-[#ddd] py-[5px] px-[7px]"
                                            >
                                                <span key={rating} className="hidden group-hover:block">
                                                    <X size={12} />
                                                </span>
                                                {rating}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="">
                                    {dropdownState.rating ? (
                                        <ChevronUp className="" size={16} />
                                    ) : (
                                        <ChevronDown className="" size={16} />
                                    )}
                                </div>
                            </button>
                            {/* Display Rating */}
                            {dropdownState.rating && (
                                <div className="absolute z-[10] top-[100%] left-0 right-0 max-h-[200px] overflow-y-auto custom-scrollbar bg-white  border-[1px] border-[#e1e1e1] py-5 mt-[3px] mb-[10px]">
                                    {ratings.map((ratingOption) => (
                                        <div
                                            onClick={() => handleStarClick(ratingOption.value)}
                                            className="flex items-center py-[9px] px-4 cursor-pointer hover:bg-[#f1f1f1]"
                                        >
                                            <input
                                                className="mr-[8px]"
                                                type="checkbox"
                                                checked={selectedRatings.includes(ratingOption.value)}
                                            />
                                            <button className="flex items-center gap-[3px]">
                                                {renderStars(ratingOption.rating)}
                                            </button>
                                            <span className="text-[#444] text-[14px]">{ratingOption.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Search */}
                    <div className="">
                        <button className="w-full flexCenter gap-[5px] px-[85px] py-[7px] h-[42px] text-[16px] font-medium rounded-full text-white bg-[#2A74ED] hover:bg-[#222222] transition-all duration-200 ease-linear">
                            <Search size={18} />
                            <span> Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
