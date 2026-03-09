"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        title: "Affordable for small businesses",
        description: "Premium quality execution tailored for local and startup budgets.",
    },
    {
        title: "Strategy-first approach",
        description: "We don't just make things look pretty; we make sure they perform.",
    },
    {
        title: "Creative execution",
        description: "Bold design and modern web techniques that differentiate your brand.",
    },
    {
        title: "Fast delivery",
        description: "Lean processes that strip away bloated timelines and deliver swiftly.",
    },
    {
        title: "Practical solutions",
        description: "No confusing jargon or vanity metrics—only what actually moves the needle.",
    },
];

export function WhyChooseUsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".reason-item",
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
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
        <section ref={sectionRef} className="py-24 bg-[#1a1a1a] text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-black font-dm-sans mb-6">Why Choose Kerna</h2>
                        <p className="text-white/70 font-inter text-lg leading-relaxed">
                            We cut through the noise to provide exactly what you need. No unnecessary overhead, just results.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reasons.map((reason, i) => (
                            <div
                                key={i}
                                className={`reason-item bg-[#222] p-6 rounded-2xl border border-white/5 hover:border-teal/50 transition-colors ${i === 4 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-teal shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold font-dm-sans text-lg mb-2">{reason.title}</h3>
                                        <p className="text-white/60 font-inter text-sm leading-relaxed">{reason.description}</p>
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
