import Section from "../Section";
import cn from "@/utils/cn";
import Project from "./Project";
import getProjectIds from "@/utils/getProjectIds";

interface Props {
  className?: string;
}

export default async function Projects({ className }: Props) {
  const projectIds = await getProjectIds();

  return (
    <Section name="projects" className={cn(className)}>
      <div className="flex flex-col items-center gap-20 py-12">
        <h3 className="text-3xl font-semibold">Here are my recent projects:</h3>

        {projectIds.map((projectId) => (
          <Project key={projectId} projectId={projectId} />
        ))}
      </div>
    </Section>
  );
}
