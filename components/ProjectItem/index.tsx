import StyledProjectItem from "./style";
import { BsMusicNote } from "react-icons/bs";
import { ReactNode } from "react";

interface Props {
   projetctTitle: string;
   projetctDescription: string;
   projectIcon: ReactNode;
   projectColor: string;
   projectUrl: string;
   repositoryUrl: string;
}

const ProjectItem = ({
   projectIcon,
   projetctTitle,
   projetctDescription,
   projectColor,
   projectUrl,
   repositoryUrl,
}: Props) => {
   return (
      <StyledProjectItem>
         <h3>{projetctTitle}</h3>
         <p>{projetctDescription}</p>

         <div className="links">
            <a href={projectUrl} target="_blank" rel="noreferrer">
               site
            </a>
            <a href={repositoryUrl} target="_blank" rel="noreferrer">
               repository
            </a>
         </div>

         <div className="icon" style={{ background: projectColor }}>
            {projectIcon}
         </div>
      </StyledProjectItem>
   );
};

export default ProjectItem;
