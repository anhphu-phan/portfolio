import { Project } from "@/types";

const projects: Project[] = [
  {
    name: "Akidex",
    summary:
      "A website to help people to look up for relative information about anime/manga/visual novel.",
    description: `A website to help people to look up for relative information about anime/manga/visual novel.  
      The website is built with React, Vite, MUI, GraphQL, TypeScript, NodeJS, Express, MongoDB.  
      It uses [AniList](https://anilist.co)'s GraphQL API to fetch data for anime/manga and uses [VNDB](https://vndb.org)'s TCP-based API (pain) to fetch data for visual novel.
      
      `,
    techs: ["React", "Vite", "MUI", "GraphQL", "TypeScript", "NodeJS", "Express", "MongoDB"],
    githubUrl: "https://github.com/anhphu-phan/akidex",
    imageDir: "akidex",
    liveUrl: "https://phuphan.vercel.app",
  },
];

export default projects;
