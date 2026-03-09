"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { TealButton } from "./TealButton";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Work", href: "/work" },
        { name: "Careers", href: "/careers" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-warm-gray dark:border-card py-3 shadow-md"
                : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-dm-sans tracking-tight">
                    Kerna<span className="text-teal">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-inter text-sm font-medium hover:text-teal transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 border-l border-warm-gray dark:border-card pl-4">
                        <ThemeToggle />
                        <TealButton href="/contact" className="px-5 py-2 text-sm">
                            Contact / Apply
                        </TealButton>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-foreground focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-warm-gray dark:border-card py-6 px-6 flex flex-col gap-6 shadow-xl transition-all duration-300 origin-top ${isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-dm-sans font-medium hover:text-teal transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <TealButton href="/contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact / Apply
                </TealButton>
            </div>
        </header>
    );
}
