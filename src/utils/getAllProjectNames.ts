import getAllProjectIds from "./getAllProjectIds";
import projects from "@/data/projects";

export default async function getAllProjectNames(): Promise<string[]> {
  const projectsIds = await getAllProjectIds();

  return projectsIds.map((id) => projects[id].name);
}
