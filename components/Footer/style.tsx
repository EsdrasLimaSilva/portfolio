import styled from "styled-components";

const StyledFooter = styled.footer`
   align-items: center;
   background: ${({ theme }) => theme.neutralLighter};
   color: ${({ theme }) => theme.gradient1};
   display: flex;
   flex-direction: row;
   gap: 4px;
   justify-content: center;
   padding: 20px 0;

   a {
      font-size: 48px;
   }
`;

export default StyledFooter;
