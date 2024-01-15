import React from "react";
import { get_tbl_tipoentrada } from "../services/tbl_tipoentrada";
import Main from "../components/Menu";
import "../App.css"
const Tabla_tipoEntrada = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_tipoentrada().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;
    
    return (
        <div className="main">
        <Main></Main>
        <div id="tabla-tipo-entrada">
        <h1>Tabla tbl_tipoentrada</h1>
        <hr />
        <table>
            <thead>
            <tr>
                <th>I_IDTIPOENTRADA</th>
                <th>S_NBTIPOENTRADA</th>
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
        </div>
    );
}

export default Tabla_tipoEntrada;