import styled from "styled-components";

const StyledSkillItem = styled.li`
   position: relative;
   transition: all 0.2s ease-out;
   user-select: none;

   .description{
      align-items: center;
      background-color: ${({ theme }) => theme.neutralLight};
      border-radius: 20px;
      border: 2px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
      display: flex;
      font-size: 1rem;
      justify-content: center;
      left: 50%;
      opacity: 0;
      padding: 5px 10px;
      position: absolute;
      text-align: center;
      top: 0;
      transform: translate(-50%, 0%);
      transition: all 0.2s ease-out;
      width: 180px;
      z-index: 2;
   }
   
   .icon{
      align-items: center;
      background-color: ${({ theme }) => theme.neutralLight};
      border-radius: 100%;
      color: ${({ theme }) => theme.gradient1};
      display: flex;
      font-size: 45px;
      height: 60px;
      justify-content: center;
      width: 60px;
      width: fit-content;
   }

   &:hover{

      .description{
         opacity: 1;
         transform: translate(-50%, -150%);
      }
   }


`;

export default StyledSkillItem;
