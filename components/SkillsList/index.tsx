import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJava, DiMysql, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import {
   SiJavascript,
   SiNextdotjs,
   SiRedux,
   SiSpring,
   SiStyledcomponents,
   SiTypescript,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import StyledSkillList from "./style";
import SkillItem from "../SkillItem";

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
         title: "Figma",
         icon: <CgFigma />,
      },

      {
         title: "Java",
         icon: <DiJava />,
      },

      {
         title: "Spring Framework",
         icon: <SiSpring />,
      },

      {
         title: "MySQL",
         icon: <DiMysql />,
      },
   ];

   return (
      <StyledSkillList>
         {skills.map((skill) => (
            <SkillItem key={skill.title} skillTitle={skill.title}>
               {skill.icon}
            </SkillItem>
         ))}
      </StyledSkillList>
   );
};

export default SkillsList;
