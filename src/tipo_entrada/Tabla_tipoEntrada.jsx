import React from "react";
import { get_tbl_tipoentrada } from "../services/tbl_tipoentrada";

const Tabla_tipoEntrada = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_tipoentrada().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;
    
    return (
        <div>
        <h1>Tabla tbl_tipoentrada</h1>
        <table>
            <thead>
            <tr>
                <th>I_IDTIPOENTRADA</th>
                <th>S_NBTIPOENTRADA</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((tipoentrada) => (
                <tr key={tipoentrada.I_IDTIPOENTRADA}>
                <td>{tipoentrada.I_IDTIPOENTRADA}</td>
                <td>{tipoentrada.S_NBTIPOENTRADA}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Tabla_tipoEntrada;