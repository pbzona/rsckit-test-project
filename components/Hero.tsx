"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { withPropInspector } from "rsckit/components";

interface HeroProps {
	title: string;
	description: string;
	buttonText: string;
}

function Hero_({ title, description, buttonText }: HeroProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="text-center"
		>
			<h1 className="text-4xl font-bold mb-4">{title}</h1>
			<p className="text-xl mb-6">{description}</p>
			<Button size="lg">{buttonText}</Button>
		</motion.section>
	);
}

Hero_.displayName = "Hero";

export const Hero = withPropInspector(Hero_, console.log);
