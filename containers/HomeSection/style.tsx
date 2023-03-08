import styled from "styled-components";

const StyledHomeSection = styled.section`
   align-items: center;
   display: flex;
   min-height: 100vh;
   overflow: hidden;
   position: relative;

   div#profile-info{
      color: ${({ theme }) => theme.neutralLight};
      display: none;
      margin-left: 100px ;
      opacity: 0;
      transform: translateX(-500px);
      transition: all 0.7s ease-out;

      h1 {
         font-size: 3rem;
      }

      h2{ 
         font-size: 1.5rem;
         font-weight: normal;
         opacity: 0.9;
      }


      h3 {
         font-weight: normal;
         font-size: 1.2rem;
      }

   }

   img#wave1{
      bottom: -10px;
      position: absolute;
      width: 100vw;
   }

   @media (max-width: 480px){
      div#profile-info{
         margin-left: 10px;
      }

       img#wave1{
         bottom: -5px;
         position: absolute;
         width: 100vw;
      }
   }


`;

export default StyledHomeSection;
