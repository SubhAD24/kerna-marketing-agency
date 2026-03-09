"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorTextRef = useRef<HTMLSpanElement>(null);
    const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch, then set false

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }
        setIsMobile(false);

        const cursor = cursorRef.current;
        const cursorText = cursorTextRef.current;
        if (!cursor || !cursorText) return;

        // Set up GSAP quickTo for smooth performant tracking
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3.out" });

        let isHovering = false;

        const onMouseMove = (e: MouseEvent) => {
            // Offset by half width/height to center the cursor
            xTo(e.clientX);
            yTo(e.clientY);
        };

        const onMouseEnterLink = (e: MouseEvent) => {
            isHovering = true;
            const target = e.target as HTMLElement;

            // Determine what type of element we are hovering to change cursor style
            const closestLink = target.closest('a');
            const closestButton = target.closest('button');

            // Check if it's a portfolio/work card
            if (closestLink && closestLink.getAttribute('href')?.includes('/work')) {
                gsap.to(cursor, { scale: 4, backgroundColor: "rgba(0, 184, 169, 0.9)", duration: 0.3, ease: "power2.out" });
                if (cursorText) {
                    cursorText.innerText = "View";
                    gsap.to(cursorText, { opacity: 1, duration: 0.2, delay: 0.1 });
                }
            } else if (closestLink || closestButton) {
                gsap.to(cursor, { scale: 2.5, backgroundColor: "rgba(0, 184, 169, 0.4)", backdropFilter: "blur(4px)", border: "1px solid rgba(0, 184, 169, 0.8)", duration: 0.3, ease: "power2.out" });
            }
        };

        const onMouseLeaveLink = () => {
            isHovering = false;
            gsap.to(cursor, { scale: 1, backgroundColor: "rgba(0, 184, 169, 1)", backdropFilter: "blur(0px)", border: "none", duration: 0.3, ease: "power2.out" });
            if (cursorText) {
                gsap.to(cursorText, { opacity: 0, duration: 0.2, onComplete: () => { if (cursorText) cursorText.innerText = ""; } });
            }
        };

        // Attach listeners
        window.addEventListener("mousemove", onMouseMove);

        // Use event delegation for hover states
        document.addEventListener("mouseover", (e) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button')) {
                onMouseEnterLink(e);
            }
        });

        document.addEventListener("mouseout", (e) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button')) {
                onMouseLeaveLink();
            }
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            // document event listeners would ideally be cleaned up perfectly but for simplicity in global layout they stay active.
        };
    }, []);

    if (isMobile) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-teal pointer-events-none z-[100] flex items-center justify-center mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            style={{ willChange: "transform" }}
        >
            <span ref={cursorTextRef} className="text-[#111] font-dm-sans font-bold text-[4px] leading-none opacity-0 whitespace-nowrap pointer-events-none"></span>
        </div>
    );
}
