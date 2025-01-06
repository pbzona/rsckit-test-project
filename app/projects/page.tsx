import ProjectFilter from "@/components/ProjectFilter";
import ProjectList from "@/components/ProjectList";
import ProjectSearch from "@/components/ProjectSearch";

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="flex justify-between items-center">
        <ProjectSearch />
        <ProjectFilter />
      </div>
      <ProjectList />
    </div>
  );
}
