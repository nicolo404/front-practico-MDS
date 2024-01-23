import React from "react";
import { post_tbl_avisomail } from "../services/tbl_avisomail";
import "../App.css"
import Menu from "../components/Menu";
import Swal from "sweetalert2";

const Crear_avisomail = () => {
    const [avisomail, setAvisomail] = React.useState({
        i_activo: 0,
        i_idpatron: 0,
        i_prohibe: 0,
        s_grMail: null,
        s_nombre:"",
        s_rut:""
    });

    const handleChange = (e) => {
        setAvisomail({
            ...avisomail,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        post_tbl_avisomail(avisomail).then(() => {
            Swal.fire({
                icon: "success",
                title: "Email creado exitosamente",
                showConfirmButton: false,
                timer: 1500,
            });
            window.location.href = "/tbl_avisomail";
        });
        */
    };
    return (
        <div className="main">
        <Menu></Menu>
        <div className="contenido-crear-usuario">
        <h1 id="titulo-avisomail">Crear Aviso Email</h1>
        <form onSubmit={handleSubmit} className="form-new-update-user">
            <div className="form-group">
                <label htmlFor="I_IDPATRON">ID Patron</label>
                <input
                    type="number"
                    name="I_IDPATRON"
                    id="I_IDPATRON"
                    className="form-control"
                    placeholder="ID Patron"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="S_EMAIL">Email</label>
                <input
                    type="email"
                    name="S_EMAIL"
                    id="S_EMAIL"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="I_ACTIVO">Activo</label>
                <input
                    type="number"
                    name="I_ACTIVO"
                    id="I_ACTIVO"
                    className="form-control"
                    placeholder="Activo"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="I_PROHIBE">Prohibe</label>
                <input
                    type="number"
                    name="I_PROHIBE"
                    id="I_PROHIBE"
                    className="form-control"
                    placeholder="Prohibe"
                    onChange={handleChange}
                    required
            />
            </div>
            <div className="form-group">
                <label htmlFor="S_NOMBRE">Nombre</label>
                <input
                    type="text"
                    name="S_NOMBRE"
                    id="S_NOMBRE"
                    className="form-control"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
            />
            </div>
            <button type="submit" className="btn btn-primary">
                Crear
            </button>
        </form>
        
        </div>
        </div>
    );  
}
export default Crear_avisomail;