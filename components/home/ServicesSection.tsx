"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShoppingCart, PenTool, Hash, FileText, LineChart, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Website Design, SEO & Hosting",
        description: "Beautiful, fast, and optimized websites built to rank higher and attract local customers.",
        icon: Globe,
    },
    {
        title: "eCommerce Website Development",
        description: "Robust online stores designed for smooth shopping experiences and maximum conversions.",
        icon: ShoppingCart,
    },
    {
        title: "Branding & Visual Identity",
        description: "Memorable logos, color palettes, and brand guidelines that make you stand out.",
        icon: PenTool,
    },
    {
        title: "Social Media Management",
        description: "Consistent, engaging profiles that build community and drive brand awareness.",
        icon: Hash,
    },
    {
        title: "Content Creation",
        description: "High-quality copywriting, photography, and video to tell your unique story.",
        icon: FileText,
    },
    {
        title: "Market Analysis & Strategy",
        description: "Data-driven roadmaps to identify your audience and outsmart your competition.",
        icon: LineChart,
    },
    {
        title: "Online Profile Setup & Handholding",
        description: "Google Maps, Local listings, and complete platform setup with expert guidance.",
        icon: MapPin,
    },
];

export function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".service-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
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
        <section ref={sectionRef} className="py-24 bg-card w-full border-y border-warm-gray dark:border-[#222]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col mb-16">
                    <h2 className="text-3xl md:text-5xl font-black font-dm-sans text-foreground mb-4">Our Services</h2>
                    <p className="text-lg text-foreground/70 font-inter max-w-2xl">
                        Everything your small business needs to establish a premium presence, without the premium agency runaround.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="service-card group bg-background dark:bg-[#111] border border-warm-gray dark:border-[#222] p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal/10 hover:border-teal/30"
                        >
                            <div className="w-12 h-12 bg-warm-gray dark:bg-[#222] rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal transition-colors duration-300">
                                <service.icon size={24} className="text-foreground group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-dm-sans mb-3 text-foreground">{service.title}</h3>
                            <p className="text-foreground/70 font-inter leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
