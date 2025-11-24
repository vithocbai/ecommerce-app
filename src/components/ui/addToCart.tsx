type addToCartProps = {
    title: string
}

export const AddToCart = ({title}: addToCartProps) => {
    return <section>
        <button className="px-[30px] py-[10px] font-bold text-[16px] bg-[#2A74ED] text-[#fff] rounded-full hover:bg-[#000] transition-all duration-200 ease-linear">{title}</button>
    </section>
}