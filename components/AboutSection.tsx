"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/your-bg.jpg')] bg-cover bg-center opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Halo, saya King. Mahasiswa Informatics Engineering yang suka bikin
          project dengan Next.js, React, dan animasi UI.
        </p>
      </div>
    </div>
  );
}
