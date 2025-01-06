"use client";

import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="w-full" />
            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 p-2 bg-gray-800 text-white text-sm rounded"
              >
                {skill.level < 70
                  ? "Proficient"
                  : skill.level < 85
                    ? "Advanced"
                    : "Expert"}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
