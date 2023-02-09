import styled from "styled-components";

const StyledSkillsSection = styled.section`
   min-height: 150vh  ;
   padding: 50px 0;
   overflow: hidden;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;


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
      padding-left: 50px;
      width: 100%;
   }

   h2{
      color: ${({ theme }) => theme.neutralLight};
      margin-bottom: 150px;
      font-size: 1.9rem;
   }
`;

export default StyledSkillsSection;
