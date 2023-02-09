import styled from "styled-components";

const StyledHomeSection = styled.section`
   min-height: 100vh;
   display: flex;
   align-items: center;
   position: relative;
   overflow: hidden;

   div#profile-info{
      margin-left: 100px ;
      color: ${({ theme }) => theme.neutralLight};
      h1 {
         font-size: 3rem;
      }

      h2{ 
         font-weight: normal;
         font-size: 1.5rem;
         opacity: 0.9;
      }


      h3 {
         font-weight: normal;
         font-size: 1.2rem;
      }

   }

   img#wave1{
      position: absolute;
      bottom: -10px;
      width: 100vw;
   }
`;

export default StyledHomeSection;
