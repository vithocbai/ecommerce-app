import { Link, useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import {
    ChevronLeft,
    ChevronRight,
    Facebook,
    Heart,
    Linkedin,
    Minus,
    PhoneOutgoing,
    Plus,
    RefreshCcw,
    ShoppingBasket,
    Twitter,
} from "lucide-react";
import { sampleCategory } from "../../data/sampleCategory";
import { renderStars } from "../ui/renderStar";
import { AddToCart } from "../ui/addToCart";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "../ui/spinner";

export const ProductDetail = () => {
    const location = useLocation();
    const product = location.state.product;
    const [totalAddCart, setTotalAddCart] = useState(1);

    // Tìm category name dựa vào categoryId
    const categoryIdName = sampleCategory.find((cat) => cat.id === product.categoryId)?.name || "";
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

    return (
        <section className="max-w-[1600px] mx-auto">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <nav className="flex items-center  my-[15px] px-[15px] text-[13px] text-[#666]">
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
                <div className="w-[76%] flex p-[15px]">
                    {/* Quản lý ảnh */}
                    <div className="w-[49%] overflow-hidden ">
                        {/* Ảnh chính hiển thị và zoom*/}
                        <div
                            ref={imageContainerRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeve}
                            className="group relative mb-2 overflow-hidden border border-[#E5E5E5]"
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
                    <div className="w-[51%] mx-[30px]">
                        <h1>{product.title}</h1>
                        <div>
                            <span>{renderStars(product.star)}</span> <span>(1 customer review)</span>
                        </div>
                        <div>
                            {product.oldPrice ? (
                                <div>
                                    <span>
                                        $
                                        {new Intl.NumberFormat("en-US", {
                                            minimumFractionDigits: 2,
                                        }).format(product.oldPrice)}
                                    </span>
                                    <span>
                                        $
                                        {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
                                            product.price
                                        )}
                                    </span>
                                </div>
                            ) : (
                                <span>
                                    $
                                    {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(product.price)}
                                </span>
                            )}
                        </div>
                        <p>{product.preview} people are viewing this product right now</p>
                        <p>
                            This Bluetooth speaker delivers big sound, making it then only music system you’ll need in
                            or out of the house. Prem materials such as anodized aluminum & durable polymers withstand
                            the rigor of an active lifestyle.
                        </p>

                        {/* Add Cart */}
                        <div>
                            <div className="flex items-center mr-[20px] h-[38px] cursor-pointer">
                                <span onClick={handleMinus} className="flexCenter px-[4px] text-[#222]  h-full">
                                    <Minus strokeWidth={1.5} size={20} />
                                </span>
                                <div className="flexCenter w-[20px] h-full select-none">{totalAddCart}</div>
                                <span onClick={handlePlus} className="flexCenter px-[4px] text-[#222] h-full">
                                    <Plus strokeWidth={1.5} size={20} />
                                </span>
                            </div>
                            <div className="w-[280px] h-[53px]">
                                <AddToCart title="Add to card" icon={<ShoppingBasket strokeWidth={2.5} size={18} />} />
                            </div>
                        </div>

                        {/* Heart */}
                        <div className="flex items-center gap-[2px] mb-[10px] cursor-pointer">
                            <Heart size={20} strokeWidth={1.5} />
                            <p className="pl-[5px]">Add to wishlist</p>
                        </div>
                        {/* Reaload */}
                        <div className="flex items-center gap-[2px] mb-[10px] cursor-pointer">
                            <RefreshCcw size={20} strokeWidth={1.5} />
                            <p className="pl-[5px]">Add to compare</p>
                        </div>
                        {/* Skud */}
                        <div className="text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] uppercase">sku: </span> {product.sku}
                        </div>
                        {/* Category */}
                        <div className="text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] ">Category: </span> {categoryIdName}
                        </div>
                        {/* Tags */}
                        <div className="text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] ">Tags: </span> Headphones, Speaker
                        </div>
                        {/* Share */}
                        <div className="flex items-center gap-1 text-[16px] text-[#888] mb-[12px]">
                            <span className="text-[#222] mr-1">Share:</span>
                            <span>
                                <Twitter size={16} />
                            </span>
                            <span>
                                <Facebook size={16} />
                            </span>
                            <span>
                                <Linkedin size={16} />
                            </span>
                            <span>
                                <PhoneOutgoing size={16} />
                            </span>
                        </div>
                    </div>
                </div>
                {/* Sidebar Right */}
                <div className="w-[24%]">Sidebar</div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
};
