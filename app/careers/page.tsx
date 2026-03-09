import { TealButton } from "@/components/TealButton";
import { Briefcase, Clock, FileCheck } from "lucide-react";

export const metadata = {
    title: "Careers | Kerna",
    description: "Join Kerna as an intern. Build real things for real clients.",
};

const roles = [
    {
        title: "Web Development Intern",
        description: "Work directly with our engineering and design teams to build responsive, high-performance websites for our clients. You will get hands-on experience with modern frameworks and deploy real-world projects.",
        duration: "12 weeks",
        skills: [
            "HTML, CSS, JavaScript basics",
            "Familiarity with React or Next.js",
            "Understanding of responsive design principles",
            "Eagerness to learn and problem-solve"
        ]
    },
    {
        title: "Marketing / Sales Intern",
        description: "Learn how to strategize and execute marketing campaigns. You'll assist in local market research, lead generation, and shadowing sales calls to understand the business side of an agency.",
        duration: "12 weeks",
        skills: [
            "Strong written and verbal communication",
            "Interest in social media platforms and trends",
            "Basic understanding of SEO principles",
            "Comfortable with outreach and networking"
        ]
    },
    {
        title: "Branding & Research Intern",
        description: "Dive deep into brand strategy. You'll help conduct competitor analysis, build mood boards, and assist the creative directors in formulating visual identity presentations.",
        duration: "12 weeks",
        skills: [
            "Eye for design and typography",
            "Experience with Figma or Adobe Creative Suite",
            "Strong research capabilities",
            "Detail-oriented and highly organized"
        ]
    }
];

export default function CareersPage() {
    return (
        <div className="py-24 sm:py-32 bg-background min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Briefcase className="text-teal" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-dm-sans mb-6 text-foreground">Join Kerna</h1>
                    <p className="text-xl font-inter text-foreground/70 leading-relaxed">
                        We are looking for hungry, creative, and strategic interns who want to step out of the classroom and build real things for real clients. No fetching coffee—just strategy, spark, and shipping real work.
                    </p>
                </div>

                <div className="space-y-8">
                    {roles.map((role, i) => (
                        <div key={i} className="bg-card border border-warm-gray dark:border-[#222] p-8 md:p-10 rounded-3xl hover:border-teal/50 hover:shadow-xl hover:shadow-teal/5 transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                                <div className="md:w-2/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-warm-gray dark:bg-[#1a1a1a] text-xs font-bold font-dm-sans uppercase tracking-wider rounded-md text-foreground">
                                            <Clock size={14} className="text-teal" />
                                            {role.duration}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-dm-sans mb-4 text-foreground">{role.title}</h2>
                                    <p className="text-foreground/80 font-inter mb-8 leading-relaxed">
                                        {role.description}
                                    </p>

                                    <div>
                                        <h3 className="font-bold font-dm-sans text-foreground mb-4 text-sm tracking-wide uppercase">Skills Required</h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {role.skills.map((skill, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <FileCheck size={18} className="text-teal shrink-0 mt-0.5" />
                                                    <span className="font-inter text-sm text-foreground/80">{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-full md:w-auto md:shrink-0 flex items-center md:justify-end mt-4 md:mt-0">
                                    <TealButton href="/contact" className="w-full md:w-auto shadow-sm">
                                        Apply Now
                                    </TealButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
