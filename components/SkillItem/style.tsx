import styled from "styled-components";

const StyledSkillItem = styled.li`
   position: relative;
   user-select: none;
   transition: all 0.2s ease-out;

   .description{
      background-color: ${({ theme }) => theme.neutralLight};
      color: ${({ theme }) => theme.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      border-radius: 20px;
      padding: 5px 10px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 180px;
      opacity: 0;
      transition: all 0.2s ease-out;
      text-align: center;
      z-index: -10;
      border: 2px solid ${({ theme }) => theme.primary};
   }
   
   .icon{
      font-size: 45px;
      width: fit-content;
      color: ${({ theme }) => theme.gradient1};
      background-color: ${({ theme }) => theme.neutralLight};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 100%;
   }

   &:hover{

      .description{
         opacity: 1;
         transform: translate(-50%, -150%);
      }
   }

`;

export default StyledSkillItem;
