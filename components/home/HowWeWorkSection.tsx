"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: "Discover",
        description: "We dive deep into your brand, audience, and goals to uncover exactly what you need.",
    },
    {
        title: "Strategize",
        description: "We craft a clear, actionable roadmap designed specifically to deliver measurable results.",
    },
    {
        title: "Build",
        description: "Our creative and technical teams bring the strategy to life with premium execution.",
    },
    {
        title: "Launch & Improve",
        description: "We push it live, monitor the performance, and refine the approach for maximum impact.",
    },
];

export function HowWeWorkSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".timeline-step",
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black font-dm-sans text-center mb-20">How We Work</h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-warm-gray dark:bg-card md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((step, i) => (
                            <div key={i} className={`timeline-step relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Number Circle */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-background border-4 border-teal rounded-full flex items-center justify-center font-bold font-dm-sans text-teal text-sm z-10 md:-translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_10px_rgba(0,184,169,0.3)]">
                                    0{i + 1}
                                </div>

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                                    <div className="bg-card p-8 rounded-2xl border border-warm-gray dark:border-[#222] transition-colors hover:border-teal/50">
                                        <h3 className="text-2xl font-bold font-dm-sans mb-3 text-foreground">{step.title}</h3>
                                        <p className="text-foreground/70 font-inter text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
