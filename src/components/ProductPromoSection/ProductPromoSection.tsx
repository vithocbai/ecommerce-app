import { COLORS } from "../../theme";
import type { ProductPromo } from "../../types/productPromo";

interface ProductPromoProps {
    productPromos: ProductPromo[];
}
export const ProductPromoSection = ({ productPromos }: ProductPromoProps) => {
    console.log("productPromo", productPromos);
    return (
        <section className="mt-[65px] max-lg:mt-[20px]">
            <div className="flex items-center w-full gap-[30px] max-md:block">
                {productPromos.map((productPromo) => {
                    return (
                        <div className="relative w-[50%] max-md:mb-5 max-md:w-full h-[auto] !rounded-[12px] overflow-hidden cursor-pointer group">
                            {/* Lớp nền có hiệu ứng scale */}
                            <div
                                className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${productPromo.bgImage}')` }}
                            >
                            </div>
                            {/* Nội dung */}
                            <div className="relative top-0 px-[80px] max-sm:py-20 max-md:py-28 max-lg:px-[34px] max-lg:py-[40px] pt-[90px] pb-[70px] max-xl:pt-[20px] max-xl:pb-[10px]">
                                <h4
                                    className="text-[12px] font-medium mb-[25px] uppercase tracking-[2.4px]"
                                    style={{ color: `${COLORS.textWhite}` }}
                                >
                                    {productPromo.subTitle}
                                </h4>
                                <h2
                                    className="mb-[20px] text-[40px] max-lg:text-[24px] font-medium leading-[52px] max-lg:leading-[30px]"
                                    style={{ color: `${COLORS.textWhite}` }}
                                >
                                    {productPromo.title}
                                </h2>

                                <button
                                    className="mt-[10px] max-xl:mt-0 text-[18px] rounded-[100px] px-[40px] py-[14px] hover:bg-black hover:text-white duration-300 ease-linear opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 max-lg:hidden "
                                    style={{ color: `${COLORS.textWhite}`, backgroundColor: `${COLORS.backgroundBtn}` }}
                                >
                                    {productPromo.button.content}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
