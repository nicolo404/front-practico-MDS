import React from "react";
import "../App.css"
import { get_tbl_categoriaentradaById, put_tbl_categoriaentrada } from "../services/tbl_categoriaentrada";
import { get_tbl_tipoentrada } from "../services/tbl_tipoentrada";
import Main from "../components/Menu";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { set } from "date-fns";
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
    }, [id]);
    React.useEffect(() => {
        get_tbl_categoriaentradaById(id).then((response) => {
            //categoria..
            response.D_FECHAHRAINI = formatearFecha(response.D_FECHAHRAINI);
            response.D_FECHAHRAFIN = formatearFecha(response.D_FECHAHRAFIN);
            setCategoria(response);
        });
    }, [id]);
    const handleChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("put_tbl_categoriaentrada");
        console.log(categoria);

        const nuevaCategoria = {
            ...categoria,
            D_FECHAHRAINI: reemplazarT(categoria.D_FECHAHRAINI),
            D_FECHAHRAFIN: reemplazarT(categoria.D_FECHAHRAFIN),
        };
        console.log("nuevaCategoria");
        console.log(nuevaCategoria);
        put_tbl_categoriaentrada(id,nuevaCategoria).then(() => {
            Swal.fire({
                icon: "success",
                title: "Categoria Entrada Actualizada Exitosamente!",
                showConfirmButton: false,
                timer: 2000,
            });
            setTimeout(() => {
                window.location.href = "/tbl_categoriaentrada";
            }, 1150);
        });
    };   
    // formatear fecha para que se muestre en el input fecha
    const formatearFecha = (date) => {
        console.log("date");
        console.log(date);
        const fechaformateada = date.split('.')[0];
        console.log("fechaformateada");
        console.log(fechaformateada);        
        return fechaformateada;
    };

    // reemplazar la T por un espacio en blanco
    const reemplazarT = (date) => {
        console.log("date");
        console.log(date);
        const fechaformateada = date.replace('T', ' ');
        return fechaformateada;
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
            <option key={item.I_IDTIPOENTRADA} value={item.S_NBTIPOENTRADA}>
            {item.S_NBTIPOENTRADA}
        </option>
        ))}
        </select>
        <br />
        <label>
        Fecha y Hora Inicio:
        </label>
        <input type="datetime-local" name="D_FECHAHRAINI" value={categoria.D_FECHAHRAINI} onChange={handleChange} className="D_FECHAHRAINI"/>
        
        <br/>
        <label>
        Fecha y Hora Fin:
        </label>
        <input type="datetime-local" name="D_FECHAHRAFIN" value={categoria.D_FECHAHRAFIN} onChange={handleChange} className="D_FECHAHRAFIN"/>
        
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
        <input type="number" name="I_VALOR" value={categoria.I_VALOR} onChange={handleChange} className="input-new-update-cat"/>
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

export default Update_categoriaEntrada
