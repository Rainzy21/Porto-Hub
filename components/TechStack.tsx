"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
    SiReact, 
    SiNextdotjs, 
    SiTypescript, 
    SiTailwindcss, 
    SiNodedotjs,
    SiJavascript,
    SiHtml5,
    SiPython,
    SiCss3,
} from "react-icons/si"

const techs = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "Python", icon: SiPython, color: "text-white" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
]

export function TechStack() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
        {techs.map((tech, index) => {
            const Icon = tech.icon
            return (
            <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.001 }}
                whileHover={{ scale: 1.2 }}
            >
                <Card className="flex items-center justify-center p-4 bg-zinc-900 border border-zinc-700 shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-2">
                    <Icon size={40} className={tech.color} />
                    <p className="mt-2 text-sm text-center text-white">{tech.name}</p>
                </CardContent>
                </Card>
            </motion.div>
            )
        })}
        </div>
    )
}
