"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
  },
];

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              isHovered={hoveredProject === project.id}
              tags={[]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
