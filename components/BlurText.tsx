"use client";
import { useState, useEffect } from "react";

export function BlurText({
  text,
  delay = 100,
  duration = 4000,
  className = "",
}: {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), duration / 2);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-700 ease-in-out ${
            visible
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-sm opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: `${i * delay}ms` }}
        >
          {/* kalau spasi, render &nbsp; biar tetap kelihatan */}
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
