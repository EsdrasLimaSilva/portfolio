import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   html{
      font-family: Inter, sans-serif;
      background-image: linear-gradient(45deg, ${({ theme }) => theme.gradient2},  ${({ theme }) =>
   theme.gradient1});
   scroll-behavior: smooth;
   }

   ul{
      list-style: none;
   }

   a{
      text-decoration: none;
      color: inherit;
   }

`;

export default GlobalStyle;
