import theme from "@/styles/theme";
import { BsMusicNote } from "react-icons/bs";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import ProjectItem from "../ProjectItem";
import StyledProjectList from "./style";

const ProjectsList = () => {
   const projects = [
      {
         title: "0AS",
         description: "My personal blog about tecnology",
         icon: <FaBloggerB />,
         color: theme.projects.fourth,
         projectUrl: "https://o-analista-de-sistemas.vercel.app/",
         repositoryUrl: "https://github.com/EsdrasLimaSilva/oas",
      },
      {
         title: "Aquarium",
         description: "Share and listen to music",
         icon: <BsMusicNote />,
         color: theme.projects.first,
         projectUrl: "https://aquariumm.vercel.app/",
         repositoryUrl: "https://github.com/EsdrasLimaSilva/aquarium",
      },

      {
         title: "Gaffy",
         description: "Find amazing games to play for free",
         icon: <IoLogoGameControllerA />,
         color: theme.projects.second,
         projectUrl: "https://gaffyy.netlify.app/",
         repositoryUrl: "https://github.com/EsdrasLimaSilva/gaffy",
      },

      {
         title: "Countinfo",
         description: "Discover the countries of the world (design provided by frontend mentor)",
         icon: <TiWorld />,
         color: theme.projects.third,
         projectUrl: "https://countinfo.vercel.app/",
         repositoryUrl: "https://github.com/EsdrasLimaSilva/countinfo",
      },
   ];

   return (
      <StyledProjectList>
         {projects.map((project) => (
            <ProjectItem
               key={project.title}
               projetctTitle={project.title}
               projetctDescription={project.description}
               projectColor={project.color}
               projectIcon={project.icon}
               projectUrl={project.projectUrl}
               repositoryUrl={project.repositoryUrl}
            />
         ))}
      </StyledProjectList>
   );
};

export default ProjectsList;
