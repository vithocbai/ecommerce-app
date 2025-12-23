import { Link, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import {
    ChevronLeft,
    ChevronRight,
    Eye,
    Facebook,
    Heart,
    Linkedin,
    Minus,
    Plus,
    RefreshCcw,
    Share2,
    ShoppingBasket,
    Twitter,
} from "lucide-react";
import { sampleCategory } from "../../data/sampleCategory";
import { renderStars } from "../ui/renderStar";
import { useEffect, useMemo, useRef, useState } from "react";
import { Spinner } from "../ui/spinner";
import { shopProducts, type ShopProductProps } from "../../data/shopProduct";
import { createSlug } from "../ui/createSlug";

export const ProductDetail = () => {
    const location = useLocation();
    const product = location.state.product;
    const [totalAddCart, setTotalAddCart] = useState(1);
    const navigate = useNavigate();

    // Tìm category name dựa vào categoryId
    const categoryIdName = sampleCategory.find((cat) => cat.id === product.categoryId)?.name || "";
    const activeCategory = product.categoryId;
    const images = product.image || [];

    // --- STATE QUẢN LÝ ẢNH ---
    const [activeImg, setActiveImg] = useState(0);
    const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center" });
    const [isHovering, setIsHovering] = useState(false);

    // ref để lấy khung kích thước ảnh phục vụ cho tính toán zoom
    const imageContainerRef = useRef<HTMLDivElement>(null);

    // Load trang mặc định hiển thị ảnh
    useEffect(() => {
        setActiveImg(0);
    }, [product]);

    // --- XỬ LÝ SỐ LƯỢNG ---
    const handleMinus = () => {
        if (totalAddCart > 1) setTotalAddCart((prev) => prev - 1);
    };

    const handlePlus = () => {
        setTotalAddCart((prev) => prev + 1);
    };

    // --- XỬ LÝ PREV / NEXT ---
    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImg((prev) => (prev + 1) % images.length);
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // --- Xử Lý Zoom ảnh ---- //
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageContainerRef.current) return;
        const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();

        // Tính tọa độ chuột tương đối trong khung
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomStyle({ transformOrigin: `${x}% ${y}%` });
        setIsHovering(true);
    };

    const handleMouseLeve = () => {
        setIsHovering(false);
        // Reset transform origin sau khi hiệu ứng scale kết thúc để mượt hơn
        setTimeout(() => {
            setZoomStyle({ transformOrigin: "center center" });
        }, 1000);
    };

    // Tính số lượng của Category
    const categoryCount = shopProducts.reduce<Record<number, number>>((acc, item) => {
        acc[item.categoryId] = (acc[item.categoryId] || 0) + 1;
        return acc;
    }, {});

    // Hiển thị ngẫu nhiên 5 sản phẩm
    const productRandom = useMemo(() => {
        return [...shopProducts].sort(() => Math.random() - 0.5).slice(0, 5);
    }, []);

    // Hàm chuyển chi tiết sản phẩm
    const handleNavigateToDetail = (product: ShopProductProps) => {
        const slug = createSlug(product.title);
        navigate(`/product/${slug}`, { state: { product } });
    };

    return (
        <section>
            {/* Header */}
            <Header />

            <div className="max-w-[1600px] mx-auto px-[15px]">
                {/* Breadcrumb */}
                <nav className="flex items-center my-[15px]  pt-[10px] text-[14px] text-[#666]">
                    <ul className="flex items-center">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <ChevronRight size={14} />
                        </li>
                        <li>{categoryIdName}</li>
                        <li>
                            <ChevronRight size={14} />
                        </li>
                        <li>{product.title}</li>
                    </ul>
                </nav>
                {/* Nội dung */}
                <div className="w-full flex ">
                    {/* Chi tiết sản phẩm  */}
                    <div className="w-[76%] flex p-[15px] pl-0">
                        {/* Quản lý ảnh */}
                        <div className="w-[49%] overflow-hidden ">
                            {/* Ảnh chính hiển thị và zoom*/}
                            <div
                                ref={imageContainerRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeve}
                                className="group relative mb-2 overflow-hidden border border-[#E5E5E5] rounded-lg"
                                style={{ maxHeight: "500px" }}
                            >
                                {/* Xử lý next và prev */}
                                <div className="absolute flex top-1/2 justify-between w-full">
                                    <button
                                        onClick={handlePrevImage}
                                        onMouseMove={(e) => e.stopPropagation()}
                                        onMouseEnter={() => setIsHovering(false)}
                                        className="absolute left-1 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-600 z-20 transition-all invisible group-hover:visible"
                                    >
                                        <ChevronLeft size={30} strokeWidth={1.2} />
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        onMouseMove={(e) => e.stopPropagation()}
                                        onMouseEnter={() => setIsHovering(false)}
                                        className="absolute right-1 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-600 z-20 transition-all invisible group-hover:visible"
                                    >
                                        <ChevronRight size={30} strokeWidth={1.2} />
                                    </button>
                                </div>

                                {/* Sale */}
                                {product.oldPrice && (
                                    <div className="absolute top-[20px] left-[10px] z-50 text-[#fff] w-[58px] text-center rounded-full px-[8px] py-[3px] bg-[#c62828] text-[14px] uppercase">
                                        Sale
                                    </div>
                                )}
                                {/* Track chưa tất cả các ảnh */}
                                <div
                                    className="flex items-center transition-transform duration-500 ease-out will-change-transform"
                                    style={{ transform: `translateX(-${activeImg * 100}%)` }}
                                >
                                    {images.map((imgSrc: string, index: number) => (
                                        <div className="min-w-full h-full flex">
                                            <img
                                                className="w-full h-auto rounded-md cursor-pointer"
                                                alt={`${product.title} - ${index}`}
                                                src={`/${imgSrc}`}
                                                style={
                                                    // Chỉ áp dụng Zoom cho ảnh đang active để tối ưu hiệu năng
                                                    index === activeImg
                                                        ? {
                                                              ...zoomStyle,
                                                              transform: isHovering ? "scale(1.8)" : "scale(1)",
                                                          }
                                                        : {}
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Ảnh nhỏ (thumbnails) */}
                            <div className="flex gap-2">
                                {product.image.map((item: string, index: number) => (
                                    <div
                                        className={`border border-[#E5E5E5] rounded-md ${
                                            activeImg === index
                                                ? "border-blue-500 ring-1 ring-blue-500 opacity-100"
                                                : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                                        }`}
                                    >
                                        <img
                                            onClick={() => setActiveImg(index)}
                                            className="w-[100px] h-[100px] object-cover "
                                            key={index}
                                            src={`/${item}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Nội dung ảnh*/}
                        <div className="w-[51%]">
                            <div className="w-full px-[30px]">
                                <h1 className="text-[28px] font-medium text-[#222] mb-3 leading-tight">
                                    {product.title}
                                </h1>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="flex text-yellow-400 text-sm">{renderStars(product.star)}</span>
                                    <span className="text-[#888] text-[18px] font-barlow">(1 customer review)</span>
                                </div>

                                <div className="text-[24px] font-semibold text-[#888] mb-4">
                                    {product.oldPrice && (
                                        <span className="line-through text-[#ccc] mr-3 text-[20px]">
                                            $
                                            {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                                product.oldPrice
                                            )}
                                        </span>
                                    )}
                                    <span>
                                        $
                                        {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                            product.price
                                        )}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[#222] text-[16px] mb-6">
                                    <Eye size={16} />
                                    <span>{product.preview || 19} people are viewing this product right now</span>
                                </div>

                                <p className="text-[#666] leading-7 mb-8 text-[18px] border-b border-gray-100 pb-8 w-[100%]">
                                    This Bluetooth speaker delivers big sound, making it then only music system you’ll
                                    need in or out of the house. Prem materials such as anodized aluminum & durable
                                    polymers withstand the rigor of an active lifestyle.
                                </p>

                                <div className="flex items-center gap-5 mb-6">
                                    <div className="flex items-center border border-gray-200 rounded-full h-[45px] w-[120px] px-2">
                                        <button
                                            onClick={handleMinus}
                                            className="w-10 h-full flex items-center justify-center hover:text-blue-600"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <div className="flex-1 text-center font-medium select-none">{totalAddCart}</div>
                                        <button
                                            onClick={handlePlus}
                                            className="w-10 h-full flex items-center justify-center hover:text-blue-600"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <button className="flex-1 max-w-[200px] h-[45px] bg-[#2f79f7] hover:bg-[#1b61d6] text-white rounded-full font-medium flex items-center justify-center gap-2 transition-colors">
                                        <ShoppingBasket size={18} /> Add To Cart
                                    </button>
                                </div>

                                <div className="flex flex-col gap-3 mb-6 text-[17px] text-[#444]">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                                        <Heart size={18} /> <span>Add to wishlist</span>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                                        <RefreshCcw size={18} /> <span>Add to compare</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 text-[15px] space-y-2">
                                    <div>
                                        <span className="font-medium mr-2 uppercase text-xs tracking-wider">SKU:</span>
                                        <span className="text-[#888]">{product.sku || "N/A"}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium mr-2">Category:</span>
                                        <span className="text-[#888]">{categoryIdName}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium mr-2">Tags:</span>
                                        <span className="text-[#888]">Headphone, Speaker</span>
                                    </div>
                                </div>

                                <div className="flex items-center mt-6 gap-4">
                                    <span className="font-medium mr-1">Share:</span>
                                    <div className="flex gap-4 text-[#888]">
                                        <Twitter size={18} className="hover:text-blue-400 cursor-pointer" />
                                        <Facebook size={18} className="hover:text-blue-700 cursor-pointer" />
                                        <Linkedin size={18} className="hover:text-blue-600 cursor-pointer" />
                                        <Share2 size={18} className="hover:text-gray-900 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Right */}
                    <div className="w-[24%] p-[15px] pr-0">
                        {/* Danh mục sản phẩm và số lượng*/}
                        <div className="p-[35px] border border-[#E5E5E5] rounded-[16px] mb-5">
                            <h3 className="text-[18px] text-[#222] font-medium pb-[18px] mb-[25px] border-b border-[#E5E5E5]">
                                Product Categories
                            </h3>
                            <ul>
                                {sampleCategory.map((categories) => (
                                    <li
                                        className={`flex items-center gap-1 text-[18px] py-[5px] first:pt-0 last:pb-0 leading-7 ${
                                            activeCategory === categories.id ? "text-[#222]" : "text-[#888]"
                                        }`}
                                    >
                                        <span className="relative block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#222] hover:after:w-full after:transform after:duration-300 after:ease-linear">
                                            {categories.name}
                                        </span>
                                        <span className="text-[16px]">({categoryCount[categories.id || 0]})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Sản phẩm */}
                        <div className="p-[35px] border border-[#E5E5E5] rounded-[16px]">
                            <h3 className="text-[18px] text-[#222] font-medium pb-[18px] mb-[25px] border-b border-[#E5E5E5]">
                                Products
                            </h3>
                            <ul>
                                {productRandom.map((product) => {
                                    return (
                                        <div className="flex items-center mb-5 last:mb-0 cursor-pointer">
                                            {product.image.slice(0, 1).map((imgSrc) => (
                                                <img
                                                    className="w-[70px] h-[70px] object-cover mr-5"
                                                    src={`/${imgSrc}`}
                                                    alt=""
                                                    onClick={() => handleNavigateToDetail(product)}
                                                />
                                            ))}
                                            <div className="text-[#888] text-[16px]">
                                                <h4 className="text-[#222] line-clamp-1">{product.title}</h4>
                                                {product.oldPrice ? (
                                                    <div className="flex gap-2">
                                                        <span className="text-[14px] line-through">
                                                            $
                                                            {new Intl.NumberFormat("en-US", {
                                                                minimumFractionDigits: 2,
                                                            }).format(product.oldPrice)}
                                                        </span>
                                                        <span className="text-[14px] text-[#2a74ed]">
                                                            $
                                                            {new Intl.NumberFormat("en-US", {
                                                                minimumFractionDigits: 2,
                                                            }).format(product.price)}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <span className="text-[14px] text-[#888]">
                                                            $
                                                            {new Intl.NumberFormat("en-US", {
                                                                minimumFractionDigits: 2,
                                                            }).format(product.price)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
};
