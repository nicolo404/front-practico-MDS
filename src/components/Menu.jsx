import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Menu = () => {
    return (
            <div className="contenedor">
                <div id="imagenMDS">
                    <img src="https://www.marinadelsol.cl/home_css/img/logo.png" alt="Logo-MDS" border="0" />
                </div>
                <div id="menu">
                    <h2>Menu Tablas </h2>
                    <br />
                    <ul>
                        <hr />
                        <li><Link to="/">Inicio</Link></li>
                        <hr />
                        <li><a href="tbl_usuario">Usuarios</a></li>
                        <hr />
                        <li><a href="/tbl_tipoentrada">Tipo de Entrada</a></li>
                        <hr />
                        <li><a href="/tbl_categoriaentrada">Categoria de Entrada</a></li>
                        <hr />
                        <li><a href="/tbl_supervisor">Supervisor</a></li>
                        <hr />
                        <li><a href="/tbl_avisomail">Aviso Mail</a></li>
                        <hr />
                        <li><a href="/tbl_parametro">Parametro</a></li>
                        <hr />
                    </ul>
                </div>
            </div>
    );
}

export default Menu;
