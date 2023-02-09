import { NextPageContext } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function Document({ styleTags }: any) {
   return (
      <Html lang="en">
         <Head>
            <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
            {styleTags}
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
