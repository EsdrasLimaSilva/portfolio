import ProjectsList from "@/components/ProjectsList";
import StyledProjectsSection from "./style";

const ProjectsSection = () => {
   return (
      <StyledProjectsSection id="projects-section">
         <h2>Projects</h2>

         <ProjectsList />
      </StyledProjectsSection>
   );
};

export default ProjectsSection;
