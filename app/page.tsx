import { CallToAction } from "@/components/CallToAction";
import { FeaturedProjects, type Project } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";

const projects: Project[] = [
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

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero
        title="Welcome to My Portfolio"
        description="I'm a web developer passionate about creating amazing experiences."
        buttonText="Learn more"
      />
      <FeaturedProjects projects={projects} />
      <CallToAction />
    </div>
  );
}
