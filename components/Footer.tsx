import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card py-16 mt-0 border-t border-warm-gray dark:border-[#222]">
            <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* About */}
                <div className="md:col-span-1">
                    <Link href="/" className="text-2xl font-bold font-dm-sans tracking-tight mb-4 inline-block">
                        Kerna<span className="text-teal">.</span>
                    </Link>
                    <p className="text-foreground/70 font-inter text-sm leading-relaxed mb-6">
                        A lean, strategy-driven PR and marketing agency built for small businesses that want to look professional, move fast, and grow without burning money.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-warm-gray dark:bg-background hover:bg-teal hover:text-white transition-colors duration-300 hover:-translate-y-1">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-warm-gray dark:bg-background hover:bg-teal hover:text-white transition-colors duration-300 hover:-translate-y-1">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-warm-gray dark:bg-background hover:bg-teal hover:text-white transition-colors duration-300 hover:-translate-y-1">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-warm-gray dark:bg-background hover:bg-teal hover:text-white transition-colors duration-300 hover:-translate-y-1">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-dm-sans font-bold mb-6 text-lg">Navigation</h4>
                    <ul className="flex flex-col gap-3 font-inter text-sm">
                        <li><Link href="/" className="hover:text-teal transition-colors">Home</Link></li>
                        <li><Link href="/work" className="hover:text-teal transition-colors">Work</Link></li>
                        <li><Link href="/careers" className="hover:text-teal transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-teal transition-colors">Contact / Apply</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-2">
                    <h4 className="font-dm-sans font-bold mb-6 text-lg">Contact Us</h4>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div>
                            <p className="text-sm font-bold font-dm-sans text-foreground/50 uppercase tracking-wider mb-2">Phone</p>
                            <p className="font-inter text-sm mb-1 hover:text-teal transition-colors cursor-pointer">+91 75696 12318</p>
                            <p className="font-inter text-sm hover:text-teal transition-colors cursor-pointer">+91 99496 86160</p>
                        </div>
                        <div>
                            <p className="text-sm font-bold font-dm-sans text-foreground/50 uppercase tracking-wider mb-2">Address</p>
                            <p className="font-inter text-sm leading-relaxed">
                                Marripalem<br />
                                Visakhapatnam<br />
                                Andhra Pradesh
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl mt-16 pt-8 border-t border-warm-gray dark:border-[#222] flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-inter text-sm text-foreground/50">
                    © {new Date().getFullYear()} Kerna Marketing Agency. All rights reserved.
                </p>
                <p className="font-inter text-sm text-foreground/50">
                    Where Strategy Meets Spark.
                </p>
            </div>
        </footer>
    );
}
