import { useEffect, useRef } from "react";
import NavMenu from "../../components/NavMenu";
import StyledHomeSection from "./style";

/* eslint-disable @next/next/no-img-element */
const HomeSection = () => {
   const profileRef = useRef(null);

   useEffect(() => {
      if (profileRef.current) {
         const profileDiv = profileRef.current as HTMLElement;

         profileDiv.style.display = "block";

         setTimeout(() => {
            profileDiv.style.opacity = "1";
            profileDiv.style.transform = "translate(0, 0)";
         }, 500);
      }
   }, []);

   return (
      <StyledHomeSection id="home-section">
         <NavMenu />

         <div id="profile-info" ref={profileRef}>
            <h3>Hi, i&lsquo;m</h3>
            <h1>Esdras Silva</h1>
            <h2>Frontend developer</h2>
         </div>

         <img src="./wave1.svg" alt="wave illustration" id="wave1" />
      </StyledHomeSection>
   );
};

export default HomeSection;
