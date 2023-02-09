import StyledHomeSection from "./style";

/* eslint-disable @next/next/no-img-element */
const HomeSection = () => {
   return (
      <StyledHomeSection>
         <div id="profile-info">
            <h3>Hi, i&lsquo;m</h3>
            <h1>Esdras Silva</h1>
            <h2>Front-end developer</h2>
         </div>

         <img src="./wave1.svg" alt="wave illustration" id="wave1" />
      </StyledHomeSection>
   );
};

export default HomeSection;
