"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-black font-dm-sans mb-6 text-foreground">Get in touch</h2>

                        <div className="space-y-8 mt-8">
                            <div>
                                <p className="text-sm font-bold font-dm-sans text-teal uppercase tracking-wider mb-2">Phone</p>
                                <p className="font-inter text-lg text-foreground/80 mb-1">+91 75696 12318</p>
                                <p className="font-inter text-lg text-foreground/80">+91 99496 86160</p>
                            </div>

                            <div>
                                <p className="text-sm font-bold font-dm-sans text-teal uppercase tracking-wider mb-2">Address</p>
                                <p className="font-inter text-lg leading-relaxed text-foreground/80">
                                    Marripalem<br />
                                    Visakhapatnam<br />
                                    Andhra Pradesh
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-warm-gray dark:border-[#222] relative group">
                        <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity z-10 bg-background/20 mix-blend-saturation" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.4389561590316!2d83.24420142282327!3d17.74319497588421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39670b3899bbe9%3A0x3fd6768247180757!2sSai%20Sundar%20Residency!5e0!3m2!1sen!2sin!4v1769022633919!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 dark:invert dark:hue-rotate-180 dark:opacity-80 group-hover:grayscale-0 group-hover:contrast-100 group-hover:dark:invert-0 group-hover:dark:opacity-100 transition-all duration-700"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
