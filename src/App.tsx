import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

// Definir a font que vai utilizar e mudar no index.html
// USAR O REACT-TYPICAL PARA CRIAR O HERO COM OS TEXTOS COM EFEITO DE DIGITANDO

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
