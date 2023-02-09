import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import {
   SiJavascript,
   SiNextdotjs,
   SiRedux,
   SiStyledcomponents,
   SiTypescript,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import StyledSkillList from "./style";

const SkillsList = () => {
   const skills = [
      {
         title: "HTML5",
         icon: <AiFillHtml5 />,
      },

      {
         title: "CSS3",
         icon: <DiCss3 />,
      },

      {
         title: "Javascript",
         icon: <SiJavascript style={{ borderRadius: "100%" }} />,
      },

      {
         title: "Typescript",
         icon: <SiTypescript style={{ borderRadius: "100%" }} />,
      },

      {
         title: "React",
         icon: <DiReact />,
      },

      {
         title: "Nextjs",
         icon: <SiNextdotjs />,
      },

      {
         title: "Redux",
         icon: <SiRedux />,
      },

      {
         title: "Styled-Components",
         icon: <SiStyledcomponents />,
      },

      {
         title: "Redux",
         icon: <CgFigma />,
      },
   ];

   return (
      <StyledSkillList>
         {skills.map((skill) => (
            <li key={skill.title}>{skill.icon}</li>
         ))}
      </StyledSkillList>
   );
};

export default SkillsList;
