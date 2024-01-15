import React from "react";
import { get_tbl_categoriaentrada } from "../services/tbl_categoriaentrada";
import Menu from "../components/Menu";
import "../App.css"
const Tabla_categoriaEntrada = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_categoriaentrada().then((response) => {
        setData(response);
        });
    }, []);
    
    if (!data) return null;
    
    return (
        <div className="main">
        <Menu></Menu>
        <div className="contenido">
        <h1>Tabla tbl_categoriaentrada</h1>
        <table id="tabla-cat-entrada">
            <thead>
            <tr>
                <th>I_IDTIPOENTRADA</th>
                <th>I_IDCATENTRADA</th>
                <th>S_NBCATENTRADA</th>
                <th>D_FECHAHRAINI</th>
                <th>D_FECHAHRAFIN</th>
                <th>I_CANTENTRADADEF</th>
                <th>I_EDAD</th>
                <th>S_SEXO</th>
                <th>S_RANGO</th>
                <th>S_USARLISTA</th>
                <th>I_VALOR</th>
                <th>S_IMAGEN</th>
            </tr>
            </thead>
            <tbody>
            {data.map((categoriaentrada) => (
                <tr key={categoriaentrada.I_IDCATENTRADA}>
                <td>{categoriaentrada.I_IDCATENTRADA}</td>
                <td>{categoriaentrada.I_IDTIPOENTRADA}</td>
                <td>{categoriaentrada.S_NBCATENTRADA}</td>
                <td>{categoriaentrada.D_FECHAHRAINI}</td>
                <td>{categoriaentrada.D_FECHAHRAFIN}</td>
                <td>{categoriaentrada.I_CANTENTRADADEF}</td>
                <td>{categoriaentrada.I_EDAD}</td>
                <td>{categoriaentrada.S_SEXO}</td>
                <td>{categoriaentrada.S_RANGO}</td>
                <td>{categoriaentrada.S_USARLISTA}</td>
                <td>{categoriaentrada.I_VALOR}</td>
                <td>{categoriaentrada.S_IMAGEN}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
    );
}

export default Tabla_categoriaEntrada;