"use client";

import Link from "next/link";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface TealButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
}

export function TealButton({ href, onClick, children, className = "", variant = "primary", ...props }: TealButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        // Using GSAP quickTo for highly performant mouse tracking
        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            // Calculate distance from center of the button
            const x = (e.clientX - (rect.left + rect.width / 2)) * 0.4;
            const y = (e.clientY - (rect.top + rect.height / 2)) * 0.4;
            xTo(x);
            yTo(y);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const baseStyles = "inline-flex items-center justify-center font-dm-sans font-medium transition-colors duration-300 rounded-full shadow-sm hover:shadow-xl";

    const variants = {
        primary: "bg-teal text-white hover:shadow-teal/30 px-6 py-3",
        secondary: "bg-background border border-teal text-foreground hover:bg-teal hover:text-white px-6 py-3"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <div ref={buttonRef} className="inline-block relative z-10">
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <div ref={buttonRef} className="inline-block relative z-10">
            <button onClick={onClick} className={combinedClassName} {...props}>
                {children}
            </button>
        </div>
    );
}
