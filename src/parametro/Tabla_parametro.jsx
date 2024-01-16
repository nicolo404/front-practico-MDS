import React from "react";
import "../App.css"
import { get_tbl_parametro } from "../services/tbl_parametro";
import Main from "../components/Menu";
const Tabla_parametro = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_parametro().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;
    
    return (
        <div className="main">
        <Main></Main>
        <div className="contenido">
        <h1 id="titulo-tipo-entrada">Tabla tbl_parametro</h1>
        <div id="tabla-parametro">
        <table>
            <thead>
            <tr>
                <th>ID Parametro</th>
                <th>Nombre Parametro</th>
                <th>Valor Parametro</th>
            </tr>
            </thead>
            <tbody>
            {data.map((parametro) => (
                <tr key={parametro.I_IDPARAMETRO}>
                <td>{parametro.I_IDPARAMETRO}</td>
                <td>{parametro.S_NBPARAMETRO}</td>
                <td>{parametro.S_VALORPARAMETRO}</td>
                </tr>
            ))
            }
            </tbody>
        </table>
        </div>
        </div>
        </div>
    );    
}

export default Tabla_parametro;