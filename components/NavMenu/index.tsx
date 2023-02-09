import theme from "@/styles/theme";
import { useEffect, useMemo, useState } from "react";
import StyledNavMenu from "./style";

const NavMenu = () => {
   function moveToSection(sectionId: string) {
      document.getElementById(sectionId)!.scrollIntoView();
   }

   return (
      <StyledNavMenu>
         <li onClick={() => moveToSection("home-section")}>Home</li>
         <li onClick={() => moveToSection("about-me-section")}>About Me</li>
         <li onClick={() => moveToSection("skills-section")}>Skills</li>
         <li onClick={() => moveToSection("projects-section")}>Projects</li>
      </StyledNavMenu>
   );
};

export default NavMenu;
