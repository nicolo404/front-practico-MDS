import React from "react";
import { post_tbl_avisomail, get_tbl_avisomail} from "../services/tbl_avisomail";
import {get_tbl_parametro} from "../services/tbl_parametro";
import "../App.css"
import Menu from "../components/Menu";
import Swal from "sweetalert2";
import { set } from "date-fns";
import { id } from "date-fns/locale";

const Crear_avisomail = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        get_tbl_avisomail().then((response) => {
            setData(response);
        });
    }, []);
    // funcion para obtener el ultimo id de la tabla avisomail
    const ultimo_id = () => {
        if (!data) return null;
        let ultimo_id = 0;
        data.forEach((avisomail) => {
            if (avisomail.i_idpatron > ultimo_id) {
                ultimo_id = avisomail.i_idpatron;
            }
        });
        return ultimo_id;
    };

    const [parametro, setParametro] = React.useState([]);
    const [avisomail, setAvisomail] = React.useState({
        i_activo: 0,
        i_idpatron: 0,
        i_prohibe: 0,
        s_grMail: null,
        s_nombre:"",
        s_rut:""
    });

    React.useEffect(() => {
        get_tbl_parametro().then((response) => {
            setParametro(response);
        });
    }, []);

    const handleChange = (e) => {
        setAvisomail({
            ...avisomail,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("puit")
        console.log(avisomail)
        const avisomail2 = {
            ...avisomail,
            i_idpatron: ultimo_id() + 1,
        };
        console.log("nueva Categoria")
        console.log(avisomail2)
        
        post_tbl_avisomail(avisomail2).then(() => {
            Swal.fire("Aviso Email Creado!", "Tu aviso email ha sido creado.", "success");
            setTimeout(() => {
                window.location.href = "/tbl_avisomail";
            }, 1100);
        });    
    };
    return (
        <div className="main">
        <Menu></Menu>
        <div className="contenido-crear-usuario">
        <h1 id="titulo-crear-update">Crear Aviso Email</h1>
        <form onSubmit={handleSubmit} className="form-new-update-user">
            
            
                <label>Email</label>
                <select
                    className="input-new-update-cat"
                    name="s_grMail"
                    onChange={handleChange}
                    required
                >
                    <option value={null}>--Seleccione--</option>
                    {parametro.map((parametro) => (
                        <option key={parametro.I_IDPARAMETRO} value={parametro.S_NBPARAMETRO}>
                            {parametro.S_NBPARAMETRO}
                        </option>
                    ))}
                </select>

                <label>Activo</label>
                <select
                    className="input-new-update-cat"
                    name="i_activo"
                    onChange={handleChange}
                    required
                >
                    <option value="default">--Seleccione--</option>
                    <option value={0}>No</option>
                    <option value={1}>Si</option>
                </select>
           
                <label>Prohibe</label>
                <select
                    className="input-new-update-cat"
                    name="i_prohibe"
                    onChange={handleChange}
                    required
                >
                    <option value="default">--Seleccione--</option>
                    <option value={0}>No</option>
                    <option value={1}>Si</option>
                </select>
           
                <label>Nombre</label>
                <input
                    type="text"
                    name="s_nombre"
                    className="input-new-update-user"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
                />
                <label>Rut</label>  
                <input
                    type="text"
                    name="s_rut"
                    className="input-new-update-user"
                    placeholder="Rut"
                    onChange={handleChange}
                    required
                />    

            <button type="submit">
                Crear
            </button>
        </form>    
        </div>
        </div>
    );  
}

export default Crear_avisomail;