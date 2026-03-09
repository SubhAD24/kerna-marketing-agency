import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { WorkPreviewSection } from "@/components/home/WorkPreviewSection";
import { CareersPreviewSection } from "@/components/home/CareersPreviewSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ScrollingMarquee } from "@/components/home/ScrollingMarquee";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-40 w-full overflow-hidden pb-10">
      <HeroSection />
      <ScrollingMarquee />
      <AboutSection />
      <ServicesSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <WorkPreviewSection />
      <CareersPreviewSection />
      <ContactSection />
    </div>
  );
}
