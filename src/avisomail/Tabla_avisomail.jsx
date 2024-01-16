import React from "react";
import {get_tbl_avisomail} from "../services/tbl_avisomail";
import "../App.css"
import Menu from "../components/Menu";

const Tabla_avisomail = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_avisomail().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;
    
    return (
        <div className="main">
        <Menu></Menu>
        <div className="contenido">
        <h1 id="titulo-avisomail">Tabla Aviso Email</h1>
        <table id="tabla-avisomail">
            <thead>
            <tr>
                <th>ID Patron</th>
                <th>Nombre</th>
                <th>Rut</th>
                <th>s_grMail</th>
                <th>Activo</th>
                <th>Prohibe</th>
            </tr>
            </thead>
            <tbody>
            {data.map((avisomail) => (
                <tr key={avisomail.i_idpatron}>
                <td>{avisomail.i_idpatron}</td>
                <td>{avisomail.s_nombre}</td>
                <td>{avisomail.s_rut}</td>
                <td>{avisomail.s_grMail}</td>
                <td>{avisomail.i_activo}</td>
                <td>{avisomail.i_prohibe}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
    );    
}

export default Tabla_avisomail;