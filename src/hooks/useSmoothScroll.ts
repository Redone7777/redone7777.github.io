import { useEffect } from "react";
import Lenis from "lenis";
import { useMotionValue } from "framer-motion";

// Global lenis instance
let lenisInstance: Lenis | null = null;

export function useSmoothScroll() {
    const scrollY = useMotionValue(0);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            syncTouch: true,
        });

        lenisInstance = lenis;

        // Sync with native scroll for Framer Motion compatibility
        lenis.on("scroll", (e: { scroll: number }) => {
            scrollY.set(e.scroll);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisInstance = null;
        };
    }, [scrollY]);

    return { scrollY, lenis: lenisInstance };
}
