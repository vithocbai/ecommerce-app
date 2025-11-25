import { Star } from "lucide-react";

export const renderStars = (count: number, total: number = 5) => {
    return Array.from({ length: total }).map((_, index) => (
        <span className={`${index < count ? "text-[#fdd835]" : "text-[#e1e1e1]"}`}>
            <Star size={16} fill={index < count ? "#fdd835" : "#e1e1e1"} />
        </span>
    ));
};
