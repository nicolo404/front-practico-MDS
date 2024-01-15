import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Menu = () => {
    return (
            <div className="contenedor">
                <div id="menu">
                    <h2>Menu Tablas </h2>
                    <br />
                    <ul>
                        <hr />
                        <li><Link to="/">Inicio</Link></li>
                        <hr />
                        <li><Link to="tbl_usuario">Usuarios</Link></li>
                        <hr />
                        <li><Link to="tbl_tipoentrada">Tipo de Entrada</Link></li>
                        <hr />
                        <li><Link to="tbl_categoriaentrada">Categoria de Entrada</Link></li>
                        <hr />
                        <li><Link to="tbl_supervisor">Supervisor</Link></li>
                        <hr />
                        <li><Link to="tbl_avisomail">Aviso Mail</Link></li>
                        <hr />
                        <li><Link to="tbl_parametro">Parametro</Link></li>
                        <hr />
                    </ul>
                </div>
            </div>
    );
}

export default Menu;
