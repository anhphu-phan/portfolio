import { projects } from "@/data";
import { Project as ProjectType } from "@/types";
import getFileNames from "@/utils/getFileNames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as path from "path";
import Tech from "../Skills/Tech";

const projectsDir = path.join(process.cwd(), "public/images/projects");

async function getProjectImages(id: number) {
  const fileNames = await getFileNames(path.join(projectsDir, id.toString()));

  return (await Promise.all(
    fileNames.map(
      async (fileName) =>
        (await import(`@public/images/projects/${id}/${fileName}`)).default as StaticImageData,
    ),
  )) as StaticImageData[];
}

async function getProjectData(id: number): Promise<ProjectType> {
  const imgs = await getProjectImages(id);

  return {
    ...projects[id],
    images: {
      main: (await import(`@public/images/projects/${id}/main.png`)).default as StaticImageData,
      list: imgs,
    },
  };
}

interface Props {
  projectId: number;
}

export default async function Project({ projectId }: Props) {
  const data = await getProjectData(projectId);

  return (
    <Link href={`/projects/${projectId}`}>
      <div className="group relative flex w-96 flex-col gap-4 overflow-hidden rounded-xl border-2 bg-slate-100 hover:bg-slate-200 p-8 shadow-lg">
        <div>
          <Image src={data.images.main} alt={data.name} placeholder="blur" quality={100} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-2xl font-bold">{data.name}</h4>
          <p className="text-lg">{data.description}</p>
          <div className="mt-4 flex flex-col items-center gap-4">
            <h5 className="text-md font-semibold">Techs used:</h5>
            <div className="flex h-auto max-w-[80%] flex-wrap items-center justify-center gap-4">
              {data.techs.map((tech) => (
                <div key={tech} className="relative aspect-square w-8">
                  <Tech name={tech} key={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
