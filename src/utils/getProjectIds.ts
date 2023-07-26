import * as path from "path";
import  getFileNames  from "@/utils/getFileNames";

export default async function getProjectIds(): Promise<number[]> {
  const projectsDir = path.join(process.cwd(), "public/images/projects");
  const dirNames = await getFileNames(projectsDir);

  return dirNames.map(Number);
}
