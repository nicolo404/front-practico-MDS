import React from "react";
import { get_tbl_categoriaentrada, delete_tbl_categoriaentrada } from "../services/tbl_categoriaentrada";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import "../App.css"
import Swal from "sweetalert2";
const Tabla_categoriaEntrada = () => {
    const [data, setData] = React.useState(null);
    const [lastId, setLastId] = React.useState(null);
    
    React.useEffect(() => {
        get_tbl_categoriaentrada().then((response) => {
        setData(response);
            setLastId(response[response.length - 1].I_IDCATENTRADA);
        });
    }, []);
    const formatearFecha = (fecha) => {
        const fechaDate = new Date(fecha);
        const anio = fechaDate.getFullYear();
        const mes = fechaDate.getMonth() + 1;
        const dia = fechaDate.getDate();
        const horaTruncada = fecha.split("T")[1].split(".")[0];
        return `${dia}/${mes}/${anio}: ${horaTruncada}`;
    };    
    const BorrarCategoria = (id) => {
        Swal.fire({
            title: "¿Estas seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Si, borrar!",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                delete_tbl_categoriaentrada(id).then(() => {
                    Swal.fire("Borrado!", "Tu categoria ha sido borrada.", "success");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1050);
                });
            }   
        });
    };

    if (!data) return null;  
    return (
        <div className="main">
        <Menu></Menu>
        <div id="contenido-cat-entrada">
        <h1 id="titulo-tipo-entrada">Tabla Categoria Entrada</h1>
        <button  ><Link to={`crear-categoria/${lastId}`}>Agregar Categoria ➕</Link></button>
        <table id="tabla-cat-entrada">
            <thead>
            <tr>   
                <th>Nombre Categoria</th>
                <th>Fecha y Hora Inicio</th>
                <th>Fecha y Hora Inicio</th>
                <th>Cant Entrada por Defecto</th>
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
                <td>{categoriaentrada.S_NBCATENTRADA}</td>
                <td>{formatearFecha(categoriaentrada.D_FECHAHRAINI)}</td>
                <td>{formatearFecha(categoriaentrada.D_FECHAHRAFIN)}</td>
                <td>{categoriaentrada.I_CANTENTRADADEF}</td>
                <td>{categoriaentrada.I_EDAD}</td>
                <td>{categoriaentrada.S_SEXO}</td>
                <td>{categoriaentrada.S_RANGO}</td>
                <td>{categoriaentrada.S_USARLISTA}</td>
                <td>{categoriaentrada.I_VALOR}</td>
                <td>{categoriaentrada.S_IMAGEN}</td>
                <td>
                    <button><Link to={`editar-categoriaentrada/${categoriaentrada.I_IDCATENTRADA}`}>Editar</Link></button>
                    <button onClick={() => BorrarCategoria(categoriaentrada.I_IDCATENTRADA)}>Borrar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
    );
};
export default Tabla_categoriaEntrada;