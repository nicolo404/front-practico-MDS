import React from "react";
import { get_tbl_supervisor, get_tbl_supervisorById, put_tbl_supervisor} from "../services/tbl_supervisor";
import "../App.css"
import { Link } from "react-router-dom";
import Menu from "../components/Menu";



const Tabla_supervisor = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_supervisor().then((response) => {
        setData(response);
        });
    }, []);
    
    const CambiarEstado = (id) => {
        get_tbl_supervisorById(id).then((response) => {
            const nuevoEstado = response[0].i_activo === 1 ? 0 : 1;
            put_tbl_supervisor(id, {i_activo: nuevoEstado}).then(() => {
                window.location.reload();
            });
        });
    }

    if (!data) return null;

    return (
        <div className="main">
        <Menu></Menu>
        <div className="contenido">
        <div  id="tabla-supervisor">
        <h1>Tabla Supervisor</h1>
        <button><Link to={`crear-supervisor`}>Agregar ➕</Link></button>
        <table>
            <thead>
            <tr>
                <th>ID Supervisor</th>
                <th>Rut Supervisor</th>
                <th>Nombre Supervisor</th>
                <th>Pin Supervisor</th>
                <th>Activo</th>
                <th>Admin</th>
                <th> </th>
            </tr>
            </thead>
            <tbody>
            {data.map((supervisor) => (
                <tr key={supervisor.i_idsupervisor}>
                <td>{supervisor.i_idsupervisor}</td>
                <td>{supervisor.s_rutsupervisor}</td>
                <td>{supervisor.s_nombresupervisor}</td>
                <td>{supervisor.i_pinsupervisor}</td>
                <td>{supervisor.i_activo}</td>
                <td>{supervisor.i_admin}</td>
                <td>
                    <button><Link to={`editar-usuario/${supervisor.i_idsupervisor}`}>Editar</Link></button>
                    <button onClick={() => CambiarEstado(supervisor.i_idsupervisor)}>Cambiar Estado</button>
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

export default Tabla_supervisor;