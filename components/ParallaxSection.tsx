"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // mulai saat masuk layar, selesai saat keluar
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // bergerak saat scroll

  return (
    <section
      ref={ref}
      className="relative h-[150vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center"
      />

      {/* Overlay konten */}
      <div className="relative z-10 text-white text-5xl font-bold">
        Parallax Scroll 🚀
      </div>
    </section>
  );
}
