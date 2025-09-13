"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { BlurText } from "@/components/BlurText";
import { TrueFocus } from "@/components/TrueFocus";
import { ScrollVelocity } from "@/components/ScrollVelocity";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative">
        <WavyBackground className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
          {/* BlurText di atas */}
          <BlurText
            text="Hello, I'am Hervino Islami Fasha"
            className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
            delay={10}
            duration={5000}
          />
          
          {/* TrueFocus di bawah BlurText */}
          <TrueFocus
            sentence="Student, FrontEnd, Designer"
            manualMode={true}
            blurAmount={8}
            borderColor="white"
            glowColor="rgba(255,255,255,0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={0.5}
            className="text-white"
            fontSize="text-[2rem]"
          />
        </WavyBackground>
      </section>
      <ScrollVelocity
          texts={["Creative", "Developer"]}
          velocity={150}
          parallaxClassName="mt-[-4rem]" // jarak ke AboutSection
          scrollerClassName=""
          scrollerStyle={{ color: "white" }}
        />
      {/* About Section */}
      <section id="about" className="relative w-full h-screen parallax-container">
        <AboutSection />
      </section>
    </main>
  );
}
