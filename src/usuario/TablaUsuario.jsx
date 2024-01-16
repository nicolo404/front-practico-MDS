import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {get_tbl_usuario, delete_tbl_usuario} from "../services/tbl_usuario_crud";
import Menu from "../components/Menu";
import Swal from "sweetalert2";
import "../App.css"

const Usuario = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        get_tbl_usuario().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;

    const BorrarUsuario = (id) => {
        Swal.fire({
            title: "¿Estas seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, borrar!",
            cancelButtonText: "No, cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                delete_tbl_usuario(id).then(() => {
                    Swal.fire("Borrado!", "Tu usuario ha sido borrado.", "success");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1050);
                });
            }
        });
    }
    
    return (
        <div className="main">        
        <Menu rutaActual ="/tbl_usuario"></Menu>
        <div className="contenido">
        <div id="tabla">
            <h2>Tabla de Usuarios</h2>
            <button  ><Link to="crear-usuario">Crear Usuario ➕</Link></button>
        <br/>
        <table>
            <thead>
            <tr>
                <th>ID PERFIL</th>
                <th>ID USUARIO</th>
                <th>PASS</th>
                <th>USUARIO</th>
                <th></th> 
            </tr>
            </thead>
            <tbody>
            {data.map((usuario) => (
                <tr key={usuario.I_IDPERFIL}>
                <td>{usuario. I_IDPERFIL}</td>
                <td>{usuario.S_IDUSUARIO}</td>
                <td>{usuario.S_PASSWD}</td>
                <td>{usuario.S_NBUSUARIO}</td>
                <td>
                    <button><Link to={`editar-usuario/${usuario.I_IDPERFIL}`}>Editar</Link></button>
                    <button onClick={() => BorrarUsuario(usuario.I_IDPERFIL)}>Borrar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
        </div>
    );
}

export default Usuario;