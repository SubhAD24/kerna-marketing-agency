"use client";

import { useState } from "react";
import { TealButton } from "@/components/TealButton";
import { CheckCircle2, ChevronDown, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Web Development Intern",
        portfolio: "",
        message: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Valid email is required.";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate network request
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: "", email: "", role: "Web Development Intern", portfolio: "", message: "" });
            }, 1000);
        }
    };

    return (
        <div className="py-24 sm:py-32 bg-background min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black font-dm-sans mb-6 text-foreground">Contact / Apply</h1>
                    <p className="text-xl font-inter text-foreground/70 max-w-2xl leading-relaxed">
                        Ready to work with Kerna? Whether you're looking for a strategy partner or applying for an internship, we'd love to hear from you.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Form Section */}
                    <div className="lg:w-1/2">
                        <div className="bg-card border border-warm-gray dark:border-[#222] p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-[60px] pointer-events-none" />
                            <h2 className="text-2xl font-bold font-dm-sans mb-8 flex items-center gap-3 text-foreground relative z-10">
                                <span className="w-6 h-[2px] bg-teal inline-block"></span>
                                Send a Message
                            </h2>

                            {isSuccess ? (
                                <div className="bg-teal/5 border border-teal/20 rounded-2xl p-10 text-center flex flex-col items-center relative z-10">
                                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={32} className="text-teal animate-bounce" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-dm-sans mb-3 text-foreground">Application Received</h3>
                                    <p className="text-foreground/70 font-inter mb-8">
                                        Thanks for reaching out! We will review your message and get back to you shortly.
                                    </p>
                                    <TealButton onClick={() => setIsSuccess(false)}>
                                        Send Another Message
                                    </TealButton>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div>
                                        <label className="block text-sm font-bold font-dm-sans text-foreground mb-2 tracking-wide uppercase">Full Name</label>
                                        <input
                                            type="text"
                                            className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-warm-gray dark:border-[#333]'} rounded-xl px-4 py-3.5 font-inter text-foreground focus:outline-none focus:border-teal transition-colors shadow-sm`}
                                            placeholder="Jane Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1 font-medium font-inter">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold font-dm-sans text-foreground mb-2 tracking-wide uppercase">Email</label>
                                        <input
                                            type="email"
                                            className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-warm-gray dark:border-[#333]'} rounded-xl px-4 py-3.5 font-inter text-foreground focus:outline-none focus:border-teal transition-colors shadow-sm`}
                                            placeholder="jane@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1 font-medium font-inter">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold font-dm-sans text-foreground mb-2 tracking-wide uppercase">Role Applying For</label>
                                        <div className="relative">
                                            <select
                                                className="appearance-none w-full bg-background border border-warm-gray dark:border-[#333] rounded-xl px-4 py-3.5 font-inter text-foreground focus:outline-none focus:border-teal transition-colors shadow-sm cursor-pointer"
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            >
                                                <option>Web Development Intern</option>
                                                <option>Marketing / Sales Intern</option>
                                                <option>Branding & Research Intern</option>
                                                <option>General Inquiry</option>
                                                <option>Client Work Request</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50" size={18} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold font-dm-sans text-foreground mb-2 tracking-wide uppercase">Portfolio / GitHub / LinkedIn</label>
                                        <input
                                            type="text"
                                            className="w-full bg-background border border-warm-gray dark:border-[#333] rounded-xl px-4 py-3.5 font-inter text-foreground focus:outline-none focus:border-teal transition-colors shadow-sm"
                                            placeholder="https://..."
                                            value={formData.portfolio}
                                            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold font-dm-sans text-foreground mb-2 tracking-wide uppercase">Short Message</label>
                                        <textarea
                                            rows={4}
                                            className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-warm-gray dark:border-[#333]'} rounded-xl px-4 py-3.5 font-inter text-foreground focus:outline-none focus:border-teal transition-colors resize-none shadow-sm`}
                                            placeholder="Tell us why you're a great fit..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-xs mt-1 font-medium font-inter">{errors.message}</p>}
                                    </div>

                                    <TealButton
                                        type="submit"
                                        className="w-full shadow-sm"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Application"}
                                    </TealButton>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-bold font-dm-sans mb-8 text-foreground">Contact Info</h2>

                        <div className="flex flex-col sm:flex-row gap-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-1">
                                    <Phone size={18} className="text-teal" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold font-dm-sans text-foreground/50 uppercase tracking-wider mb-2">Phone</p>
                                    <p className="font-inter text-lg text-foreground mb-1 hover:text-teal transition-colors cursor-pointer">+91 75696 12318</p>
                                    <p className="font-inter text-lg text-foreground hover:text-teal transition-colors cursor-pointer">+91 99496 86160</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-1">
                                    <MapPin size={18} className="text-teal" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold font-dm-sans text-foreground/50 uppercase tracking-wider mb-2">Address</p>
                                    <p className="font-inter text-lg leading-relaxed text-foreground">
                                        Marripalem<br />
                                        Visakhapatnam<br />
                                        Andhra Pradesh
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[300px] lg:h-[400px] rounded-3xl overflow-hidden border border-warm-gray dark:border-[#222] relative group shadow-sm bg-warm-gray dark:bg-[#1a1a1a]">
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
            </div>
        </div>
    );
}
