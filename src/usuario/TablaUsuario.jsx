import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {get_tbl_usuario} from "../services/tbl_usuario_crud";
const Usuario = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        get_tbl_usuario().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;
    
    return (
        <div>
        <h1>Tabla tbl_usuario</h1>
        <button ><Link to="crear-usuario">Crear Usuario ➕</Link></button>
        <br/>
        <table>
            <thead>
            <tr>
                <th>I_IDPERFIL</th>
                <th>S_IDUSUARIO</th>
                <th>S_PASSWD</th>
                <th>S_NBUSUARIO</th>
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
    );
}

export default Usuario;