import styled from "styled-components";

const StyleAboutMeSection = styled.section`
   align-items: flex-start;
   background: ${({ theme }) => theme.neutralLight};
   display: flex;
   flex-direction: column;
   gap: 64px;
   justify-content: center;
   min-height: 100vh;
   padding: 100px 60px;

   h2{
      color: ${({ theme }) => theme.primary};
      font-size: 1.8rem;
   }

   div {
     align-items: center;
     display: flex;
     flex-direction: column;
     gap: 24px;
     justify-content: center;
     width: 100%;
     
     p {
      font-size: 1.2rem;
      line-height: 24px;
      max-width: 800px;
      width: 100%;
      text-align: left;
      width: 100%;
     }
   }

   @media (max-width: 480px) {
      padding: 100px 16px;
   }
`;

export default StyleAboutMeSection;
