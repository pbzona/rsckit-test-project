"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for teams",
    tags: ["Vue.js", "Express", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Real-time weather data visualization",
    tags: ["React", "D3.js", "API Integration"],
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media",
    tags: ["Angular", "Firebase", "Chart.js"],
  },
];

export default function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHoveredProject(project.id)}
          onHoverEnd={() => setHoveredProject(null)}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            tags={project.tags}
            isHovered={hoveredProject === project.id}
          />
        </motion.div>
      ))}
    </div>
  );
}
