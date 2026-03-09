import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Our Work | Kerna",
    description: "Explore our sample projects where strategy meets spark.",
};

const projects = [
    {
        title: "Local Coffee Co.",
        industry: "Food & Beverage",
        description: "Complete visual overhaul and custom eCommerce setup for a rapidly growing local chain.",
        problem: "The client had a scattered brand identity and an outdated website that couldn't handle online coffee bean orders.",
        solution: "We designed a cohesive brand system and built a blazing fast headless eCommerce site, resulting in a 200% increase in online sales."
    },
    {
        title: "Peak Fitness",
        industry: "Health & Wellness",
        description: "A comprehensive social media and lead generation strategy.",
        problem: "Despite a great facility, local awareness was low and new member signups were stagnant.",
        solution: "Implemented a targeted social media ad campaign paired with an optimized landing page, driving a 150% increase in leads."
    },
    {
        title: "Nexus Tech Services",
        industry: "B2B Technology",
        description: "SEO and Content strategy for an IT services provider.",
        problem: "Stuck on page 4 of Google for all major local service keywords.",
        solution: "A full technical SEO audit and 6-month content strategy that secured the #1 rank locally within 4 months."
    }
];

export default function WorkPage() {
    return (
        <div className="py-24 sm:py-32 bg-background min-h-screen">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black font-dm-sans mb-6 text-foreground">Our Work</h1>
                    <p className="text-xl font-inter text-foreground/70 max-w-2xl leading-relaxed">
                        We don't just build things that look good. We build things that work. Here is a sample of how we've helped small businesses grow.
                    </p>
                </div>

                <div className="space-y-28">
                    {projects.map((project, i) => (
                        <div key={i} className="group flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2 aspect-[4/3] bg-warm-gray dark:bg-[#1a1a1a] rounded-3xl overflow-hidden relative border border-transparent group-hover:border-teal/30 transition-colors shadow-sm">
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 bg-gradient-to-br from-teal/20 to-transparent">
                                    <span className="font-dm-sans font-bold tracking-widest text-lg uppercase text-foreground">Project Visual</span>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-warm-gray dark:bg-card text-xs font-bold font-dm-sans uppercase tracking-wider rounded-md text-foreground">
                                        {project.industry}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold font-dm-sans mb-4 group-hover:text-teal transition-colors text-foreground">{project.title}</h2>
                                <p className="text-foreground/80 font-inter mb-8 text-lg">{project.description}</p>

                                <div className="space-y-6">
                                    <div className="p-6 bg-card rounded-2xl border border-warm-gray dark:border-[#222]">
                                        <h3 className="font-bold font-dm-sans text-foreground mb-2 flex items-center gap-2">
                                            <span className="w-4 h-[2px] bg-red-400 inline-block"></span>
                                            The Problem
                                        </h3>
                                        <p className="text-foreground/70 font-inter text-sm leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div className="p-6 bg-teal/5 dark:bg-teal/10 rounded-2xl border border-teal/20">
                                        <h3 className="font-bold font-dm-sans text-foreground mb-2 flex items-center gap-2">
                                            <span className="w-4 h-[2px] bg-teal inline-block"></span>
                                            The Solution
                                        </h3>
                                        <p className="text-foreground/80 font-inter text-sm leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
