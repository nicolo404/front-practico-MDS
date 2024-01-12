import React from "react";
import { get_tbl_supervisor } from "../services/tbl_supervisor";

const Tabla_supervisor = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_supervisor().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;
    
    return (
        <div>
        <h1>Tabla tbl_supervisor</h1>
        <table>
            <thead>
            <tr>
                <th>i_idsupervisor</th>
                <th>s_rutsupervisor</th>
                <th>s_nombresupervisor</th>
                <th>i_pinsupervisor</th>
                <th>i_activo</th>
                <th>i_admin</th>
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
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );    
}

export default Tabla_supervisor;