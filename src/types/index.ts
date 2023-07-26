import { StaticImageData } from "next/image";

export interface NavItem {
  name: string;
  path: string;
}

export interface Skill {
  name: string;
  iconUrl: string;
}

export interface Tech {
  [key: string]: {
    name: string;
    icon?: StaticImageData;
    iconUrl?: string;
  };
}

export interface ProjectWithoutImage {
  name: string;
  description: string;
  techs: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ProjectImage {
  main: StaticImageData;
  list: StaticImageData[];
}

export type Project = ProjectWithoutImage & { images: ProjectImage };
