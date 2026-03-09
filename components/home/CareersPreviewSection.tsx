"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { TealButton } from "../TealButton";

gsap.registerPlugin(ScrollTrigger);

const roles = [
    { title: "Web Development Intern", type: "12 Weeks", dept: "Engineering" },
    { title: "Marketing / Sales Intern", type: "12 Weeks", dept: "Growth" },
    { title: "Branding & Research Intern", type: "12 Weeks", dept: "Creative" },
];

export function CareersPreviewSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".career-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
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
        <section ref={sectionRef} className="py-24 bg-card border-y border-warm-gray dark:border-[#222]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mb-6">
                        <Briefcase className="text-teal" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black font-dm-sans mb-4 text-foreground">Join as an Intern</h2>
                    <p className="font-inter text-foreground/70 max-w-xl text-lg mb-8">
                        Get hands-on experience working on real projects for real clients. No fetching coffee—just strategy and spark.
                    </p>
                    <TealButton href="/careers" variant="secondary">View All Open Roles</TealButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roles.map((role, i) => (
                        <Link key={i} href="/careers" className="career-card group bg-background border border-warm-gray dark:border-[#222] p-8 rounded-2xl hover:border-teal/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none group-hover:bg-teal/10 transition-colors" />

                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <span className="bg-warm-gray dark:bg-card px-3 py-1 rounded-md text-xs font-bold font-dm-sans tracking-wide text-foreground">
                                    {role.dept}
                                </span>
                                <span className="text-foreground/50 text-xs font-inter font-medium">{role.type}</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold font-dm-sans mb-4 group-hover:text-teal transition-colors text-foreground">{role.title}</h3>
                                <div className="flex items-center text-teal font-inter text-sm font-bold">
                                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
