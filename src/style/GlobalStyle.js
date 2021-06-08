import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin:0;
  }
`;
