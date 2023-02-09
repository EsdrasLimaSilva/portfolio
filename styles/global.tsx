import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   html{
      font-family: Arial, Helvetica, sans-serif;
      background-image: linear-gradient(45deg, ${({ theme }) => theme.gradient2},  ${({ theme }) =>
   theme.gradient1});
   }

   ul{
      list-style: none;
   }

`;

export default GlobalStyle;
