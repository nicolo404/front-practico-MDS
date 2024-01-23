import React from "react";
import {get_tbl_avisomail,delete_tbl_avisomail} from "../services/tbl_avisomail";
import "../App.css"
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Tabla_avisomail = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_avisomail().then((response) => {
        setData(response);
        });
    }, []);

    const Activo = (i_activo) => {
        if (i_activo === 1) {
            return "Si";
        } else {
            return "No";
        }
    }
    const Prohibe = (i_prohibe) => { 
        if (i_prohibe === 1) {
            return "Si";
        } else {
            return "No";
        }
    }
    const BorrarEmail = (i_idpatron) => {
        Swal.fire({
            title: "¿Seguro que quieres borrar el email?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed) {
                delete_tbl_avisomail(i_idpatron).then(() => {
                    Swal.fire("Borrado!", "El email ha sido borrado.", "success");
                    window.location.reload();
                });
            }
        });
    }
    
    if (!data) return null;
    
    return (
        <div className="main">
        <Menu></Menu>
        <div className="contenido">
        <h1 id="titulo-avisomail">Tabla Aviso Email</h1>
        <div id="tabla-email">
        <button><Link to={"crear-avisomail"}>Crear ➕</Link></button>
        <table >
            <thead>
            <tr>
                <th>ID Patron</th>
                <th>Nombre</th>
                <th>Rut</th>
                <th>s_grMail</th>
                <th>Activo</th>
                <th>Prohibe</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((avisomail) => (
                <tr key={avisomail.i_idpatron}>
                <td>{avisomail.i_idpatron}</td>
                <td>{avisomail.s_nombre}</td>
                <td>{avisomail.s_rut}</td>
                <td>{avisomail.s_grMail}</td>
                <td>{Activo(avisomail.i_activo)}</td>
                <td>{Prohibe(avisomail.i_prohibe)}</td>
                <td>
                    <button><Link to={`editar-avisomail/${avisomail.i_idpatron}`}>Editar</Link></button>
                    <button onClick={() => BorrarEmail(avisomail.i_idpatron)}>Borrar</button>
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

export default Tabla_avisomail;