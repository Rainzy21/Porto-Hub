"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";

type TiltedCardProps = {
  imageSrc: string | StaticImageData; // bisa url atau import
  altText: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
};

export default function TiltedCard({
  imageSrc,
  altText,
  captionText,
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 15,
  scaleOnHover = 1.05,
  displayOverlayContent = false,
  overlayContent,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * rotateAmplitude);
    rotateY.set(((x - centerX) / centerX) * -rotateAmplitude);
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <div style={{ height: containerHeight, width: containerWidth }} className="relative">
      <motion.div
        ref={cardRef}
        className="relative rounded-xl shadow-lg will-change-transform"
        style={{
          height: imageHeight,
          width: imageWidth,
          rotateX: springX,
          rotateY: springY,
          scale: springScale,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="rounded-xl object-cover"
        />

        {displayOverlayContent && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            {overlayContent}
          </div>
        )}
      </motion.div>

      {captionText && (
        <p className="mt-2 text-center text-sm text-white">{captionText}</p>
      )}
    </div>
  );
}
