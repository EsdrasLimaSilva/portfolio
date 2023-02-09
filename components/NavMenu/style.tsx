import styled from "styled-components";

const StyledNavMenu = styled.ul`
   color: ${({ theme }) => theme.neutralLighter};
   display: f;
   flex-direction: row;
   font-size: 1.1rem;
   font-weight: 500;
   gap: 64px;
   position: absolute;
   right: 50px;
   top: 20px;
   z-index: 20;



   li{
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: border-color 0.2s ease-out;
      user-select: none;
   }

   li:hover{
      border-bottom-color: ${({ theme }) => theme.neutralLighter};
   }

   @media (max-width: 540px) {
      display: none;
   }

`;

export default StyledNavMenu;
