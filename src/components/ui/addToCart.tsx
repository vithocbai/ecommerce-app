type addToCartProps = {
    title: string;
    icon?: React.ReactNode;
};

export const AddToCart = ({ title, icon }: addToCartProps) => {
    return (
        <section>
            <button className="flex items-center px-[30px] py-[10px] font-bold text-[16px] bg-[#2A74ED] text-[#fff] rounded-full hover:bg-[#000] transition-all duration-200 ease-linear">
                {icon && <span className="pr-[5px]">{icon}</span>}
                <span>{title}</span>
            </button>
        </section>
    );
};
