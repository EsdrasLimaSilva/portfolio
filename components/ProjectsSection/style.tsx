import styled from "styled-components";

const StyledProjectsSection = styled.section`
   min-height: 100vh;
   background: ${({ theme }) => theme.neutralLight};
   display: flex;
   flex-direction: column;
   justify-content: center;

   h2 {
      color: ${({ theme }) => theme.primary};
      margin-bottom: 100px;
      padding-left: 50px;
   }
`;

export default StyledProjectsSection;
