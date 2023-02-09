import styled from "styled-components";

const StyleAboutMeSection = styled.section`
   background: ${({ theme }) => theme.neutralLight};
   padding: 100px 60px;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 64px;

   h2{
      color: ${({ theme }) => theme.primary};
      font-size: 1.8rem;
   }

   div {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 100%;
     gap: 24px;
     
     p {
      width: 100%;
      max-width: 800px;
      text-align: left;
      font-size: 1.2rem;
      line-height: 24px;
     }
   }
`;

export default StyleAboutMeSection;
