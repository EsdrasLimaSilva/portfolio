import SkillsList from "../SkillsList";
import StyledSkillsSection from "./style";

const SkillsSection = () => {
   return (
      <StyledSkillsSection>
         <img src="./wave2.svg" alt="illustration of a wave" id="wave2" />

         <main>
            <h2>Skills</h2>

            <SkillsList />
         </main>

         <img src="./wave3.svg" alt="illustration of a wave" id="wave3" />
      </StyledSkillsSection>
   );
};

export default SkillsSection;
