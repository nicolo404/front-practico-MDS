
import Menu from "./components/Menu";
import "./App.css"
import React from "react";


const App = ()=>{
  return (
    <div className="main">
    <Menu></Menu> 
    <div className="contenido">
      <h1 id="titulo-page1">Eliga una tabla a visualizar</h1>
    </div>
    </div>
  );
}

export default App