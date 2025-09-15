"use client"

import TiltedCard from "@/components/TiltedCard"; 
import { TechStack } from "@/components/TechStack"
import Self from "@/public/images/self.png";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section className="relative w-full h-full flex flex-col items-center justify-center px-6 md:px-20 text-white">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Kiri: Text dan TechStack */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300">
                I am a passionate developer who loves building modern web applications and creative products.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
              <TechStack />
            </div>

            {/* Create Section */}
            <div>
              <h2 className="text-2xl font-bold mb-2">CREATE</h2>
              <p className="text-gray-300 mb-4">
                I also enjoy designing creative assets and visuals that complement digital products.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105 transition cursor-pointer">
                  Figma
                </span>
                <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105 transition cursor-pointer">
                  Canva
                </span>
                <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105 transition cursor-pointer">
                  Adobe Photoshop
                </span>
              </div>
            </div>
          </div>

          {/* Kanan: Foto/Profile Card */}
          <div className="flex items-center justify-center h-screen md:h-auto">
            <TiltedCard
              imageSrc={Self}
              altText="Album Cover"
              captionText="Hervino Islami Fasha"
              rotateAmplitude={20}
              scaleOnHover={1.1}
              displayOverlayContent={true}
              overlayContent={<p className="text-lg font-bold"> Its Me bruhh!!!! </p>}
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}
