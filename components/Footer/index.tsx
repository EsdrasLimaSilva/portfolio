import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import StyledFooter from "./style";

const Footer = () => {
   return (
      <StyledFooter>
         <a href="https://linkedin.com/in/esdras-silva-frontend" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
         </a>
         <a href="https://github.com/EsdrasLimaSilva" target="_blank" rel="noreferrer">
            <AiFillGithub />
         </a>
      </StyledFooter>
   );
};

export default Footer;
