interface SpinnerProps {
    size?: "sm" | "md" | "lg";
    color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = "md", color = "text-blue-500" }) => {
    const sizeClasses = {
        sm: "w-5 h-5",
        md: "w-8 h-8",
        lg: "w-12 h-12",
    };

    return (
        <section>
            <div
                className={`${sizeClasses[size]} text-gray-400 border-2 border-solid border-current border-r-transparent rounded-full shadow-md animate-spin`}
            >
                {/* Thêm một span ẩn để hỗ trợ screen reader */}
                <span className="sr-only">Đang tải...</span>
            </div>
        </section>
    );
};
