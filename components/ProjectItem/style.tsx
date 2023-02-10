import styled from "styled-components";

const StyledProjectItem = styled.div`
   background-color: ${({ theme }) => theme.neutralLighter};
   border-radius: 20px;
   box-shadow: 1px 1px 2px #22222230;
   color: ${({ theme }) => theme.neutralDark};
   font-weight: 300;
   height: 200px;
   overflow: hidden;
   padding: 20px;
   position: relative;
   width: 300px;

   p{
      width: 200px;
   }

   .icon{
      align-items: center;
      border-top-left-radius: 100px;
      bottom: 0;
      color: ${({ theme }) => theme.neutralLight};
      display: flex;
      font-size: 2.3rem;
      height: 150px;
      justify-content: center;
      position: absolute;
      right: 0;
      width: 100px;
   }

   .visit-button{
      background-color: transparent;
      border-radius: 100px;
      border: 2px solid ${({ theme }) => theme.neutralDark};
      bottom: 10px;
      color: inherit;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      left: 50%;
      padding: 4px 12px;
      position: absolute;
      text-align: center;
      text-decoration: none;
      transform: translateX(-50%);
      transition: all 0.15s ease-out;
      width: 90px;

      &:hover{
         background: linear-gradient(45deg, ${({ theme }) => theme.gradient1}, ${({ theme }) =>
   theme.gradient2});
         color: ${({ theme }) => theme.neutralLight};
         border-color: ${({ theme }) => theme.neutralLight};
   
      }
   }
`;

export default StyledProjectItem;
