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
        <div id="tabla-tipo-entrada">
        <table>
            <thead>
            <tr>
                <th>I_IDPARAMETRO</th>
                <th>S_NBPARAMETRO</th>
                <th>S_VALORPARAMETRO</th>
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