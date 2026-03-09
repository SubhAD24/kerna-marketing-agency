"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phrases = [
    "Smart Strategy",
    "Bold Design",
    "Creative Marketing",
    "Digital Growth",
    "Brand Transformation",
    "Web Development",
];

export function ScrollingMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!trackRef.current) return;

            const track = trackRef.current;
            // Get the width of half the track to know when to seamlessly loop
            const w = track.scrollWidth / 2;

            // Animate the marquee track
            const tl = gsap.to(track, {
                x: -w,
                duration: 25,
                ease: "none",
                repeat: -1,
            });

            // Parallax affect: speed up the marquee when scrolling
            ScrollTrigger.create({
                trigger: marqueeRef.current,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    // Add velocity to timeScale when scrolling down or up
                    const velocity = Math.abs(self.getVelocity());
                    const timeScale = 1 + velocity / 1000;

                    gsap.to(tl, {
                        timeScale: timeScale,
                        duration: 0.1,
                        onComplete: () => {
                            // Return to normal speed
                            gsap.to(tl, { timeScale: 1, duration: 0.5 });
                        }
                    });
                }
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    // Double the array to create a seamless infinite loop
    const seamlessPhrases = [...phrases, ...phrases];

    return (
        <section
            ref={marqueeRef}
            className="py-12 bg-background border-y border-warm-gray dark:border-[#222] overflow-hidden relative flex items-center"
        >
            <div
                ref={trackRef}
                className="flex whitespace-nowrap items-center w-max"
            >
                {seamlessPhrases.map((phrase, i) => (
                    <div key={i} className="flex items-center">
                        <h2 className="text-4xl md:text-6xl font-black font-dm-sans text-foreground/10 hover:text-teal transition-colors duration-500 uppercase tracking-tight mx-8 md:mx-16">
                            {phrase}
                        </h2>
                        {/* Dot separator */}
                        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-teal shrink-0"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
