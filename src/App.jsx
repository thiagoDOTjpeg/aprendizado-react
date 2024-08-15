import React, { StrictMode } from "react";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";

// Componente em classe é uma classe que herda a calsse Componente do React,
// e retorna HTML dentro do método render().

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componentes
  render() {
    return (
      <StrictMode>
        <Navbar />
      </StrictMode>
    );
  }
}

export default App;
