import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;

  *, *::after, *::before {
    box-sizing: border-box;
    
  }

}
`;
