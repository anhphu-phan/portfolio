import { projects } from "@/data";
import { Project as ProjectType } from "@/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Tech from "../Skills/Tech";

async function getProjectMainImage(projectImageDir: string) {
  const img = (await import(`@public/images/projects/${projectImageDir}/main.png`))
    .default as StaticImageData;

  return img;
}

interface Props {
  project: ProjectType;
}

export default async function Project({ project }: Props) {
  const mainImage = await getProjectMainImage(project.imageDir);

  return (
    <Link href={`/projects/${project.name}`}>
      <div className="group relative flex w-96 flex-col gap-4 overflow-hidden rounded-xl border-2 bg-slate-100 p-8 shadow-lg hover:bg-slate-200">
        <div>
          <Image src={mainImage} alt={project.name} placeholder="blur" quality={100} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-2xl font-bold">{project.name}</h4>
          <p className="text-lg">{project.summary}</p>
          <div className="mt-4 flex flex-col items-center gap-4">
            <h5 className="text-md font-semibold">Techs used:</h5>
            <div className="flex h-auto max-w-[80%] flex-wrap items-center justify-center gap-4">
              {project.techs.map((tech) => (
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
