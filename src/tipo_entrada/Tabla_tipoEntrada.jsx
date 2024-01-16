import React from "react";
import { Link } from "react-router-dom";
import { get_tbl_tipoentrada } from "../services/tbl_tipoentrada";
import Main from "../components/Menu";
import "../App.css";
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
        <div className="contenido">
        <h2 id="titulo-tipo-entrada">Tabla Tipo Entrada</h2>
        <div id="tabla-tipo-entrada">
        <hr />
        <table>
            <thead>
            <tr>
                <th>ID Tipo Entrada</th>
                <th>Nombre Tipo Entrada</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((tipoentrada) => (
                <tr key={tipoentrada.I_IDTIPOENTRADA}>
                <td>{tipoentrada.I_IDTIPOENTRADA}</td>
                <td>{tipoentrada.S_NBTIPOENTRADA}</td>
                <td>
                    <button><Link to={`editar-usuario/${tipoentrada.I_IDTIPOENTRADA}`}>Editar</Link></button>
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

export default Tabla_tipoEntrada;