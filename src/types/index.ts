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

export interface Project {
  name: string;
  summary: string;
  description: string;
  techs: string[];
  githubUrl: string;
  imageDir: string;
  liveUrl?: string;
}
