import React, { useState, useEffect, useCallback } from "react";

interface TypewriterLoopProps {
    texts: string[];
    typeSpeed?: number;
    pauseTime?: number;
    className?: string;
    loop?: boolean;
    highlightBg?: string;
    cursorClassName?: string;
}

const TypewriterLoop: React.FC<TypewriterLoopProps> = ({
    texts,
    typeSpeed = 100,
    pauseTime = 2000,
    className = "",
    loop = true,
    highlightBg = "bg-black",
    cursorClassName = "",
}) => {
    const [currentText, setCurrentText] = useState<string>("");
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [isHighlighted, setIsHighlighted] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const resetLoop = useCallback(() => {
        if (!loop && currentTextIndex >= texts.length - 1) {
            return;
        }
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, [loop, currentTextIndex, texts.length]);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];

        if (isPaused) {
            const timeout = setTimeout(() => {
                // Xóa highlight và text một lúc
                setIsHighlighted(false);
                setCurrentText("");
                setIsCompleted(false);
                setIsPaused(false);
                resetLoop();
            }, pauseTime);
            return () => clearTimeout(timeout);
        }

        if (!isCompleted) {
            if (currentText.length < currentFullText.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentFullText.slice(0, currentText.length + 1));
                }, typeSpeed);
                return () => clearTimeout(timeout);
            } else {
                // Text hoàn thành -> bôi đen background
                setIsCompleted(true);
                setIsHighlighted(true);
                setIsPaused(true);
            }
        }
    }, [currentText, currentTextIndex, isCompleted, isPaused, texts, typeSpeed, pauseTime, resetLoop]);

    const defaultCursorClass = "inline-block w-0.5 h-full bg-current ml-1 animate-pulse";
    const finalCursorClass = cursorClassName || defaultCursorClass;

    return (
        <span className={className}>
            <span className={`transition-all duration-300 ${isHighlighted ? `${highlightBg} text-white px-1` : ""}`}>
                {currentText}
            </span>
            <span className={finalCursorClass}>|</span>
        </span>
    );
};

export default TypewriterLoop;


