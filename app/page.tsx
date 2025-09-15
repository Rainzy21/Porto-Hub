"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { BlurText } from "@/components/BlurText";
import { TrueFocus } from "@/components/TrueFocus";
import { ScrollVelocity } from "@/components/ScrollVelocity";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="[&>section]:py-20">
      {/* Hero Section */}
      <section id="home" className=" snap-start relative">
        <WavyBackground className=" will-change-transform max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
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
      <section id="scroll-text" className=" snap-start relative w-full flex justify-center">
        <div className="max-w-screen">
          <ScrollVelocity
            texts={["Creative", "Developer"]}
            velocity={130}
            numCopies={5}
            parallaxClassName="mt-5" // jarak rapat ke about, tidak dempet
            scrollerClassName="whitespace-nowrap"
            scrollerStyle={{ color: "white" }}
          />
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="snap-start relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <AboutSection />
      </section>
    </main>
  );
}
