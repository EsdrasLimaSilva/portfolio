import styled from "styled-components";

const StyledSkillList = styled.ul`
   width: 100%;
   display: flex;
   flex-direction: row;
   gap: 32px;
   justify-content: flex-start;
   flex-wrap: wrap;

   li {
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
`;

export default StyledSkillList;
