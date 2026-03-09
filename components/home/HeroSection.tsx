"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TealButton } from "@/components/TealButton";
import dynamic from "next/dynamic";

const OrbScene = dynamic(() => import("@/components/three/OrbScene").then(mod => mod.OrbScene), {
    ssr: false,
    loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal/5 to-transparent animate-pulse" />
});

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            // Stagger animation for the manually split characters
            const chars = containerRef.current?.querySelectorAll('.split-char');

            tl.to(chars || [], {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power3.out",
                delay: 0.1
            })
                .fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=0.8")
                .fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=1.0");
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const splitText = (text: string, customClass = "") => {
        return text.split("").map((char, index) => (
            <span key={index} className={`split-char inline-block opacity-0 translate-y-8 ${customClass}`}>
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20"
        >
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="container mx-auto px-6 max-w-7xl pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 z-10 relative">
                        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black font-dm-sans tracking-tighter leading-none text-foreground drop-shadow-sm flex flex-wrap">
                            <span className="w-full">{splitText("Where")}</span>
                            <span className="w-full text-teal">{splitText("Strategy")}</span>
                            <span className="w-full">{splitText("Meets Spark.")}</span>
                        </h1>
                        <p
                            ref={textRef}
                            className="text-lg md:text-xl font-inter text-foreground/80 max-w-lg leading-relaxed mt-2"
                        >
                            We help small businesses grow with smart strategy, bold design, and marketing that actually works.
                        </p>
                        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mt-6">
                            <TealButton href="/contact" variant="primary">Work With Kerna</TealButton>
                            <TealButton href="/careers" variant="secondary">Join as an Intern</TealButton>
                        </div>
                    </div>
                </div>
            </div>
            <OrbScene />
        </section>
    );
}
