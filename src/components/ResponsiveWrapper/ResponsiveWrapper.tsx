import { useEffect, useState, type ReactNode } from "react";

interface ResponsiveWrapperProps {
    children: ReactNode;
    className: string;
}

export default function ResponsiveWrapper({ children, className }: ResponsiveWrapperProps) {
    const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

    useEffect(() => {
        const updateDevice = () => {
            if (window.innerWidth < 768) {
                setDevice("mobile");
            } else if (window.innerWidth < 1024) {
                setDevice("tablet");
            } else {
                setDevice("desktop");
            }
        };
        updateDevice();
        window.addEventListener("resize", updateDevice);
        return () => window.removeEventListener("resize", updateDevice);
    }, []);

    return (
        <div data-elementor-device-mode={device} className={className}>
            {children}
        </div>
    );
}
