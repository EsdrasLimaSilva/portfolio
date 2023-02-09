import theme from "@/styles/theme";
import { BsMusicNote } from "react-icons/bs";
import { IoLogoGameControllerA } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import ProjectItem from "../ProjectItem";
import StyledProjectList from "./style";

const ProjectsList = () => {
   const projects = [
      {
         title: "Aquarium",
         description: "Share and listen to music",
         icon: <BsMusicNote />,
         color: theme.projects.first,
         projectUrl: "https://aquariumm.vercel.app/",
      },

      {
         title: "Gaffy",
         description: "Find amazing games to play for free",
         icon: <IoLogoGameControllerA />,
         color: theme.projects.second,
         projectUrl: "https://gaffyy.netlify.app/",
      },

      {
         title: "Countinfo",
         description: "Discover the countries of the world (design provided by frontend mentor)",
         icon: <TiWorld />,
         color: theme.projects.third,
         projectUrl: "https://countinfo.vercel.app/",
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
            />
         ))}
      </StyledProjectList>
   );
};

export default ProjectsList;
