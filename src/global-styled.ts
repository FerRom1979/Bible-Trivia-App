import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #fbf9f9;

  *, *::after, *::before {
    box-sizing: border-box;
    
  }

}
`;
