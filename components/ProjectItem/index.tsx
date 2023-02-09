import StyledProjectItem from "./style";
import { BsMusicNote } from "react-icons/bs";
import { ReactNode } from "react";

interface Props {
   projetctTitle: string;
   projetctDescription: string;
   projectIcon: ReactNode;
   projectColor: string;
   projectUrl: string;
}

const ProjectItem = ({
   projectIcon,
   projetctTitle,
   projetctDescription,
   projectColor,
   projectUrl,
}: Props) => {
   return (
      <StyledProjectItem>
         <h3>{projetctTitle}</h3>
         <p>{projetctDescription}</p>
         <a className="visit-button" href={projectUrl} target="_blank" rel="noreferrer">
            visit
         </a>

         <div className="icon" style={{ background: projectColor }}>
            {projectIcon}
         </div>
      </StyledProjectItem>
   );
};

export default ProjectItem;
