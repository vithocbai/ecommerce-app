import type React from "react";

interface IconButtonProps {
    icon: React.ReactNode;
    text?: string;
    textClassName?: string;
    className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, className, text, textClassName }) => {
    return (
        <button className={className}>
            {icon}
            <span className={textClassName}>{text}</span>
        </button>
    );
};

export default IconButton;
