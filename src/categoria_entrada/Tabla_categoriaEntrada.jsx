import React from "react";
import { get_tbl_categoriaentrada } from "../services/tbl_categoriaentrada";
import { Link } from "react-router-dom";
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
        <div id="contenido-cat-entrada">
        <h1>Tabla tbl_categoriaentrada</h1>
        <table id="tabla-cat-entrada">
            <thead>
            <tr>
                <th>ID Categoria</th>
                <th>ID Tipo entrada</th>
                <th>Nombre Categoria</th>
                <th>Fecha y Hora Inicio</th>
                <th>Fecha y Hora Inicio</th>
                <th>I_CANTENTRADADEF</th>
                <th>EDAD</th>
                <th>SEXO</th>
                <th>RANGO</th>
                <th>USAR LISTA</th>
                <th>VALOR</th>
                <th>IMAGEN</th>
                <th></th>
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
                <td>
                    <button><Link to={`editar-usuario/${categoriaentrada.I_IDCATENTRADA}`}>Editar</Link></button>
                    <button onClick={() => BorrarUsuario(categoriaentrada.I_IDCATENTRADA)}>Borrar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
    );
}

export default Tabla_categoriaEntrada;