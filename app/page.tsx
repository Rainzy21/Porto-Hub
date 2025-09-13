"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { BlurText } from "@/components/BlurText";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
    <section id="home" className="relative">
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <BlurText
        text="Hello, I'am Hervino Islami Fasha"
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
        delay={10}
        duration={3000}
      />
    </WavyBackground>
    </section>
      {/* About Section */}
    <section id="about" className="relative">
    <AboutSection />
    </section>
    {/* Other sections can be added here */}
    </main>
  );
}
