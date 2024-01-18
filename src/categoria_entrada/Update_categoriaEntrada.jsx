import React from "react";
import "../App.css"
import { get_tbl_categoriaentradaById, put_tbl_categoriaentrada } from "../services/tbl_categoriaentrada";
import { get_tbl_tipoentrada } from "../services/tbl_tipoentrada";
import Main from "../components/Menu";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Update_categoriaEntrada = () => {
    const {id} = useParams();
    const [categoria, setCategoria] = React.useState({
        D_FECHAHRAFIN: "",
        D_FECHAHRAINI: "",
        I_CANTENTRADADEF: 0,
        I_EDAD: 0,
        I_IDCATENTRADA: 0,
        I_IDTIPOENTRADA: 0,
        I_VALOR: 0,
        S_IMAGEN: null,
        S_NBCATENTRADA: "",
        S_RANGO: "",
        S_SEXO: "",
        S_USARLISTA: ""
    }); 
    const [tipoentrada, setTipoentrada] = React.useState([]);
    React.useEffect(() => {
        get_tbl_tipoentrada().then((response) => {
            setTipoentrada(response);
        });
    }, []);
    React.useEffect(() => {
        get_tbl_categoriaentradaById(id).then((response) => {
            setCategoria(response);
        });
    }, [id]);
    const handleChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    };
    const formatearFecha = (fecha) => {
        const fechaDate = new Date(fecha);
        const anio = fechaDate.getFullYear();
        const mes = fechaDate.getMonth() + 1;
        const dia = fechaDate.getDate();
        const hora = fechaDate.getHours();
        const minutos = fechaDate.getMinutes();
        const segundos = fechaDate.getSeconds();
        return `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("put_tbl_categoriaentrada");
        console.log(categoria);
        put_tbl_categoriaentrada(id, categoria).then(() => {
            Swal.fire("Categoria Entrada Actualizada!", "Tu categoria entrada ha sido actualizada.", "success");
            setTimeout(() => {
                window.location.href = "/tbl_categoriaentrada";
            }, 1050);
        });
    };
    if (!categoria) return null;
    return (
        <div className="main">
        <Main></Main>
        <div id="contenido-crear-editar-categoria">
        <h1 className="titulo-crear-update">Editar Categoria Entrada</h1>
        <form onSubmit={handleSubmit} className="form-new-update-categoria">
       
        <label>
        Nombre entrada:
        </label>
        <select name="S_NBCATENTRADA" value={categoria.S_NBCATENTRADA} onChange={handleChange} className="input-new-update-cat">
        <option value="default">--Seleccione--</option>
        {tipoentrada.map((item) => (
            console.log(item.S_NBTIPOENTRADA),
            <option key={item.I_IDTIPOENTRADA} value={item.S_NBTIPOENTRADA}>
            {item.S_NBTIPOENTRADA}
            </option>
        ))}
        </select>
        <br />
        <label>
        Fecha y Hora Inicio:
        </label>
        <input type="datetime" name="D_FECHAHRAINI" value={formatearFecha(categoria.D_FECHAHRAINI)} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Fecha y Hora Fin:
        </label>
        <input type="datetime" name="D_FECHAHRAFIN" value={formatearFecha(categoria.D_FECHAHRAFIN)} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Cantidad Entrada Defecto:
        </label>
        <input type="number" name="I_CANTENTRADADEF" value={categoria.I_CANTENTRADADEF} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Edad:
        </label>
        <input type="number" name="I_EDAD" value={categoria.I_EDAD} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Sexo:
        </label>
        <input type="text" name="S_SEXO" value={categoria.S_SEXO} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Rango
        </label>
        <input type="text" name="S_RANGO" value={categoria.S_RANGO} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Usar Lista:
        </label>
        <input type="text" name="S_USARLISTA" value={categoria.S_USARLISTA} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Valor:
        </label>
        <input type="text" name="I_VALOR" value={categoria.I_VALOR} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <label>
        Imagen:
        </label>
        <input type="text" name="S_IMAGEN" value={categoria.S_IMAGEN || null || undefined || ""} onChange={handleChange} className="input-new-update-cat"/>
        <br />
        <button type="submit">Actualizar Categoria Entrada</button>
        </form>
        </div>
        </div>
    );
}

export default Update_categoriaEntrada;
