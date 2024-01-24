import React from "react";
import { post_tbl_categoriaentrada } from "../services/tbl_categoriaentrada";
import {get_tbl_tipoentrada} from "../services/tbl_tipoentrada";
import Swal from "sweetalert2";
import Menu from "../components/Menu";
import "../App.css";
import { useParams } from "react-router-dom";
import { set } from "date-fns";

const Crear_categoria = () => {
    const id = parseInt(useParams().id, 10);
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
    const [fecha, setFecha] = React.useState("");
    const [fecha2, setFecha2] = React.useState(""); 
    React.useEffect(() => {
        get_tbl_tipoentrada().then((response) => {
            setTipoentrada(response);
        });
    }, []);
    const handleChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    };    
    const truncarDateTime = (date) => {
        console.log(date);
        const fechaDate = new Date(date);
        const anio = fechaDate.getFullYear();
        const mes = fechaDate.getMonth() + 1;
        const dia = fechaDate.getDate();
        const horaTruncada = date.split("T")[1].split(".")[0];
        if(mes<10 && dia > 9){
            return(""+anio+"-0"+mes+"-"+dia+" "+horaTruncada);
        }
        if(dia<10 && mes>9){
            return(""+anio+"-"+mes+"-0"+dia+" "+horaTruncada);
        }
        if(mes<10 && dia < 10){
            return(""+anio+"-0"+mes+"-0"+dia+" "+horaTruncada);
        }
    };
    //validar el I_IDTIPOENTRADA cpm el nombre de la categoria
    const idTipoEntrada = (nombre) => {
        let id = 0;
        tipoentrada.map((item) => {
            if(item.S_NBTIPOENTRADA === nombre){
                id = item.I_IDTIPOENTRADA;
            }
        });
        return id;
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaCategoria = {
            ...categoria,
            I_IDCATENTRADA: id+1,
            D_FECHAHRAINI: truncarDateTime(fecha),
            D_FECHAHRAFIN: truncarDateTime(fecha2),
        };  
        console.log("nueva categoria");
        console.log(nuevaCategoria);
        
        post_tbl_categoriaentrada(nuevaCategoria).then(() => {
            Swal.fire({
                icon: "success",
                title: "Categoria creada exitosamente",
                showConfirmButton: false,
                timer: 1500,
            });
        });
         
        }

    return (
        <div className="main">
        <Menu rutaActual ="/tbl_categoriaentrada"></Menu>
        <div id="contenido-crear-editar-categoria">
        <h1 id="titulo-tipo-entrada">Crear Categoria</h1>
        <form onSubmit={handleSubmit} className="form-new-update-categoria">

        <label>Nombre Categoria</label>
        <select name="S_NBCATENTRADA" onChange={handleChange} className="input-new-update-cat">
        <option value="default">--Seleccione--</option>
        {tipoentrada.map((item) => (
            <option key={item.I_IDTIPOENTRADA} value={item.S_NBTIPOENTRADA}>
            {item.S_NBTIPOENTRADA}
        </option>
        ))}
        </select> 
            <label htmlFor="D_FECHAHRAINI">Fecha y Hora Inicio</label>
            <input
                type="datetime-local"
                name="D_FECHAHRAINI"
                className="D_FECHAHRAINI"
                onChange={
                    (e) => {
                        setFecha(e.target.value);
                    }
                }
                required
            />
            <label htmlFor="D_FECHAHRAFIN">Fecha y Hora Fin</label>
            <input
                type="datetime-local"
                name="D_FECHAHRAFIN"
                className="D_FECHAHRAFIN"
                onChange={
                    (e) => {
                        setFecha2(e.target.value);
                    }
                }
                required
            />
            <label htmlFor="I_CANTENTRADADEF" >Cant Entrada por Defecto</label>
            <input
                type="number"
                name="I_CANTENTRADADEF"
                id="I_CANTENTRADADEF"
                onChange={handleChange}
                className="input-new-update-cat"
                required
            />
            <label htmlFor="I_EDAD">EDAD</label>
            <input
                type="number"
                name="I_EDAD"
                id="I_EDAD"
                onChange={handleChange}
                className="input-new-update-cat"
                required
            />
            <label htmlFor="S_SEXO">SEXO</label>
            <input
                type="text"
                name="S_SEXO"
                id="S_SEXO"
                onChange={handleChange}
                className="input-new-update-cat"
                required
            />
            <label htmlFor="S_RANGO">RANGO</label>
            <input
                type="text"
                name="S_RANGO"
                id="S_RANGO"
                onChange={handleChange}
                className="input-new-update-cat"
            />
            <label htmlFor="S_USARLISTA">USAR LISTA</label>
            <input
                type="text"
                name="S_USARLISTA"
                id="S_USARLISTA"
                onChange={handleChange}
                className="input-new-update-cat"
                required
            />
            <label htmlFor="I_VALOR">VALOR</label>
            <input
                type="number"
                name="I_VALOR"
                id="I_VALOR"
                onChange={handleChange}
                className="input-new-update-cat"
                required
            />
            <label htmlFor="S_IMAGEN">IMAGEN</label>
            <input
                type="text"
                name="S_IMAGEN"
                id="S_IMAGEN"
                onChange={handleChange}
                className="input-new-update-cat"
            />

            <label htmlFor="">ID tipo de entrada: </label>
            <select required name="I_IDTIPOENTRADA" onChange={handleChange} className="input-new-update-cat">
            <option value="default">--Seleccione--</option>
            {tipoentrada.map((item) => (
                <option key={item.I_IDTIPOENTRADA} value={item.I_IDTIPOENTRADA}>
                {item.I_IDTIPOENTRADA+" - "+item.S_NBTIPOENTRADA}
            </option>
            ))}
            </select>            
            <button type="submit">Crear</button>
        </form>
        </div>
        </div>
    );
}

export default Crear_categoria;


