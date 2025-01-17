"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { withPropInspector } from "rsckit/components";
import ProjectCard from "./ProjectCard";

export type Project = {
	id: number;
	title: string;
	description: string;
};

interface FeaturedProjectsProps {
	projects: Project[];
}

function FeaturedProjects_({ projects }: FeaturedProjectsProps) {
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

// FeaturedProjects_.displayName = "FeaturedProjects";

export const FeaturedProjects = withPropInspector(FeaturedProjects_);
