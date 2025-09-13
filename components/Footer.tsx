"use client";

import { FloatingDock, FloatingDockItem } from "@/components/ui/floating-dock";
import { Home, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const items: FloatingDockItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/Rainzy21",
      icon: <Github className="h-5 w-5" />,
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/username",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/hrvnfsha",
      icon: <Instagram className="h-5 w-5" />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50 pb-4">
      <FloatingDock items={items} />
    </div>
  );
}
