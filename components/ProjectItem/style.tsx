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
      border-bottom-left-radius: 50px;
      top: 0;
      color: ${({ theme }) => theme.neutralLight};
      display: flex;
      font-size: 2.3rem;
      height: 150px;
      justify-content: center;
      position: absolute;
      right: 0;
      width: 80px;
   }

   div.links{
      width: 100%;
      position: absolute;
      bottom: 10px;
      left: 18px;
      display: flex;
      flex-direction: row;
      gap: 8px;

      a{
         font-size: 1.1rem;
         font-weight: normal;
         padding: 4px 18px;
         border-radius: 100px;
         transition: all 0.3s;


         &:hover{
            border-color: transparent;
            background-image: linear-gradient(
               45deg,
               ${({ theme }) => theme.gradient1},
               ${({ theme }) => theme.gradient2}
            );

            color: ${({ theme }) => theme.neutralLighter};
         }
      }
   }
`;

export default StyledProjectItem;
