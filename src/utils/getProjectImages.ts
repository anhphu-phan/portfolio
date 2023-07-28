import * as path from "path";
import getFileNames from "./getFileNames";
import { StaticImageData } from "next/image";

export default async function getProjectImages(projectImageDir: string) {
  const fileNames = await getFileNames(
    path.join(process.cwd(), "public/images/projects", projectImageDir),
  );

  return (await Promise.all(
    fileNames.map(
      async (fileName) =>
        (await import(`@public/images/projects/${projectImageDir}/${fileName}`)).default as StaticImageData,
    ),
  )) as StaticImageData[];
}
