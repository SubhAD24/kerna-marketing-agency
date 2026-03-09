"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TealButton } from "../TealButton";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: "Local Coffee Co.", category: "Branding & Web", desc: "Complete visual overhaul and custom eCommerce setup." },
    { title: "Peak Fitness", category: "Social Media Strategy", desc: "150% increase in local lead generation over 3 months." },
    { title: "Nexus Tech", category: "SEO & Growth", desc: "Moved from page 4 to rank #1 locally for IT services." },
];

export function WorkPreviewSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".preview-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
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
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black font-dm-sans mb-4 text-foreground">Sample Work</h2>
                        <p className="font-inter text-foreground/70 max-w-xl text-lg">
                            Explore how we've helped small businesses punch above their weight through strategic marketing and bold design.
                        </p>
                    </div>
                    <TealButton href="/work" variant="secondary" className="shrink-0">
                        View All Work
                    </TealButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <Link key={i} href="/work" className="preview-card group block">
                            <div className="aspect-[4/3] bg-warm-gray dark:bg-[#1a1a1a] rounded-2xl mb-6 overflow-hidden relative border border-transparent group-hover:border-teal/30 transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 bg-gradient-to-br from-teal/20 to-transparent">
                                    <span className="font-dm-sans font-bold tracking-widest uppercase text-foreground">Project Preview</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-teal font-inter text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                                    <h3 className="text-xl font-bold font-dm-sans mb-2 group-hover:text-teal transition-colors text-foreground">{project.title}</h3>
                                    <p className="text-foreground/70 font-inter text-sm">{project.desc}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-warm-gray dark:bg-[#222] flex items-center justify-center text-foreground group-hover:bg-teal group-hover:text-white transition-all -rotate-45 group-hover:rotate-0">
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
