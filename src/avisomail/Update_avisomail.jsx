import React from "react";
import {get_tbl_avisomailById, put_tbl_avisomail} from "../services/tbl_avisomail";
import {get_tbl_parametro} from "../services/tbl_parametro";
import Swal from "sweetalert2";
import Menu from "../components/Menu";
import "../App.css";
import { useParams } from "react-router-dom";
const Update_avisomail = () => {
    const{ id } = useParams();
    const [parametro, setParametro] = React.useState([]);
    const [avisomail, setAvisomail] = React.useState({
        i_activo: null,
        s_grMail: null,
        i_prohibe: 0,
        s_nombre: "",
        s_rut: ""
    });
    React.useEffect(() => {
        get_tbl_avisomailById(id).then((response) => {
            setAvisomail(response);
        });
    }, [id]);
    React.useEffect(() => {
        get_tbl_parametro().then((response) => {
            setParametro(response);
        });
    }, [id]);
    
    const handleChange = (e) => {
        setAvisomail({
            ...avisomail,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("aviso email previo al editar (put)")
        console.log(avisomail);
        put_tbl_avisomail(id, avisomail).then(() => {
            Swal.fire("Aviso Email Actualizado!", "Tu aviso email ha sido actualizado.", "success");
            setTimeout(() => {
                window.location.href = "/tbl_avisomail";
            }, 1050);
        });

    };
    if (!avisomail) return null;
    return (
        <div className="main">
            <Menu></Menu>
            <div className="contenido-crear-usuario">
                <h1 className="titulo-crear-update">Editar Aviso Email</h1>
                <form onSubmit={handleSubmit} className="form-new-update-user ">
                    <br />
                    <label>
                        Activo:
                    </label>
                    <select name="i_activo" value={avisomail.i_activo || null || ""} onChange={handleChange} className="input-new-update-user">
                        <option value={0}>No</option>
                        <option value={1}>Si</option>
                    </select>
                    <br />
                    <label>
                        Email:
                    </label>
                    <select name="s_grMail" value={avisomail.s_grMail || null || ""} onChange={handleChange} className="input-new-update-user">
                        <option value={null || ""}>--Seleccione--</option>
                        {parametro.map((parametro) => (
                            <option key={parametro.I_IDPARAMETRO} value={parametro.S_NBPARAMETRO}>{parametro.S_NBPARAMETRO}</option>
                        ))}
                    </select>
                    <br />
                    <label>
                        Prohibe:
                    </label>
                    <select name="i_prohibe" value={avisomail.i_prohibe} onChange={handleChange} className="input-new-update-user">
                        <option value={0}>No</option>
                        <option value={1}>Si</option>
                    </select>
                    <br />
                    <label>
                        Nombre:
                    </label>
                    <input
                        type="text"
                        name="s_nombre"
                        className="input-new-update-user"
                        placeholder="Nombre"
                        onChange={handleChange}
                        value={avisomail.s_nombre}
                    />
                    <br />
                    <label>
                        Rut:
                    </label>
                    <input
                        type="text"
                        name="s_rut"
                        className="input-new-update-user"
                        placeholder="Rut"
                        onChange={handleChange}
                        value={avisomail.s_rut}
                    />
                    <br />
                    <button type="submit" className="button-enviar-datos">
                        Editar
                    </button>
                </form>
            </div>
        </div>
    );  


}

export default Update_avisomail;