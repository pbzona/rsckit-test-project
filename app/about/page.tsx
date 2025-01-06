import Biography from "@/components/Biography";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <Biography />
      <Skills />
      <Timeline />
    </div>
  );
}
