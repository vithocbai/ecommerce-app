import type { Products } from "../../types/product";

interface ProductCardProps {
    product: Products
}

export const ProductCard = ({product}: ProductCardProps) => {
    return (
        <section>
            <div className="">
                <header>
                    <img src={product.image} alt="" />
                </header>
                <h3>{product.category}</h3>
                <h2>{product.descriptions}</h2>
                <div>{product.rating}</div>
                <p>
                    <span>${product.oldPrice}.00</span>
                    <span>${product.newPrice}.50</span>
                </p>
            </div>
        </section>
    );
};
