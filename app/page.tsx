import CallToAction from "@/components/CallToAction";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
}
