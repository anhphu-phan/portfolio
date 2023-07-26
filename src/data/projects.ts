import { ProjectWithoutImage } from "@/types";

const projects: { [key: number]: ProjectWithoutImage } = {
  1: {
    name: "Akidex",
    description:
      "A project to help people to look up for anime, manga and visual novel, including their other information.",
    techs: ["React", "Vite", "MUI", "GraphQL", "TypeScript", "NodeJS", "Express", "MongoDB"],
    githubUrl: "",
    liveUrl: "",
  },
};

export default projects;
