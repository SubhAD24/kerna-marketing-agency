"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".about-element",
                { y: 40, opacity: 0 },
                {
                    y: 0,
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
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute top-1/2 -left-32 w-96 h-96 bg-teal/5 dark:bg-teal/10 blur-[100px] rounded-full point-events-none" />

            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-12">

                    <div className="about-element">
                        <h2 className="text-sm font-bold font-dm-sans text-teal uppercase tracking-widest mb-4">About Kerna</h2>
                        <p className="text-xl md:text-3xl font-dm-sans font-medium text-foreground leading-relaxed">
                            Kerna is a lean, strategy-driven PR and marketing agency built for small businesses that want to look professional, move fast, and grow without burning money. We combine clear strategy with creative execution to help local brands build a strong digital presence — from websites and branding to social media and content.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-warm-gray dark:border-card">
                        <div className="about-element">
                            <h3 className="text-2xl font-bold font-dm-sans mb-3 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-teal inline-block"></span>
                                Mission
                            </h3>
                            <p className="font-inter text-foreground/80 leading-relaxed">
                                To make smart, affordable marketing accessible to small businesses and help them punch above their weight.
                            </p>
                        </div>

                        <div className="about-element">
                            <h3 className="text-2xl font-bold font-dm-sans mb-3 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-teal inline-block"></span>
                                Who We Work With
                            </h3>
                            <p className="font-inter text-foreground/80 leading-relaxed">
                                Local businesses, startups, and independent brands.
                            </p>
                        </div>

                        <div className="about-element md:col-span-2">
                            <h3 className="text-2xl font-bold font-dm-sans mb-3 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-teal inline-block"></span>
                                What We Solve
                            </h3>
                            <p className="font-inter text-foreground/80 leading-relaxed">
                                Confusing marketing, weak online presence, and scattered branding.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
