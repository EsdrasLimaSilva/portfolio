import styled from "styled-components";

const StyledSkillsSection = styled.section`
   align-items: flex-start;
   display: flex;
   flex-direction: column;
   justify-content: center;
   min-height: 100vh  ;
   overflow: hidden;
   position: relative;


   img#wave2, img#wave3{
      position: absolute;
      width: 100vw;
   }

   img#wave2{
      top: -20px;
   }

   img#wave3{
      bottom: -10px;
   }

   main{
      width: 100%;
   }

   h2{
      color: ${({ theme }) => theme.neutralLight};
      font-size: 1.9rem;
      margin-bottom: 150px;
      padding-left: 20px;
   }

   @media (max-width: 480px){
      padding: 200px 0;

       img#wave2{
      top: -5px;
   }

   img#wave3{
      bottom: -5px;
   }
   }
`;

export default StyledSkillsSection;
