import styled from "styled-components";

const StyledProjectItem = styled.div`
   width: 100%;
   width: 300px;
   height: 200px;
   padding: 20px;
   background-color: ${({ theme }) => theme.neutralLighter};
   border-radius: 20px;
   position: relative;
   box-shadow: 1px 1px 2px #22222230;
   color: ${({ theme }) => theme.neutralDark};
   font-weight: 300;
   overflow: hidden;

   p{
      width: 200px;
   }

   .icon{
      position: absolute;
      height: 150px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.3rem;
      color: ${({ theme }) => theme.neutralLight};
      border-top-left-radius: 100px;
      bottom: 0;
      right: 0;
   }

   .visit-button{
      position: absolute;
      bottom: 10px;
      cursor: pointer;
      left: 50%;
      transform: translateX(-50%);
      border: none;
      background-color: transparent;
      padding: 4px 12px;
      width: 90px;
      border-radius: 100px;
      font-weight: bold;
      font-size: 1rem;
      border: 2px solid ${({ theme }) => theme.neutralDark};
      text-decoration: none;
      color: inherit;
      text-align: center;
      transition: all 0.15s ease-out;

      &:hover{
         background: linear-gradient(45deg, ${({ theme }) => theme.gradient1}, ${({ theme }) =>
   theme.gradient2});
   color: ${({ theme }) => theme.neutralLight};
   border-color: ${({ theme }) => theme.neutralLight};
   
      }
   }
`;

export default StyledProjectItem;
