import React from "react";
import { GlobalStyle } from "./global-styled";
import Router from "./routes/Route/Routes";
import Header from "./components/Header/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor ocupa al menos el 100% de la altura de la ventana */
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  background-color: "red"; /* Hace que este div ocupe todo el espacio vertical restante */
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Router />
      </MainContent>
      <Footer>footer</Footer>
    </AppContainer>
  );
}

export default App;
