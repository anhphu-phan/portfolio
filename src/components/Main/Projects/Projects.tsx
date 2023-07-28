import Section from "../Section";
import cn from "@/utils/cn";
import Project from "./Project";
import { projects } from "@/data";

interface Props {
  className?: string;
}

export default async function Projects({ className }: Props) {
  return (
    <Section name="projects" className={cn(className)}>
      <div className="flex flex-col items-center gap-20 py-12">
        <h3 className="text-3xl font-semibold">Here are my recent projects:</h3>

        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
