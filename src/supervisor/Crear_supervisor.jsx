import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { post_tbl_supervisor } from "../services/tbl_supervisor";
import Swal from "sweetalert2";

import "../App.css"

const Crear_supervisor = () => {
    const [supervisor, setSupervisor] = React.useState({
        i_idsupervisor: "",
		s_rutsupervisor: "",
		s_nombresupervisor: "",
		i_pinsupervisor: "",
		i_activo: "",
		i_admin: ""
    });
    const handleChange = (e) => {
        setSupervisor({
            ...supervisor,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(supervisor);
        post_tbl_supervisor(supervisor).then(() => {
            Swal.fire("Supervisor Creado!", "Tu supervisor ha sido creado.", "success");
            setTimeout(() => {
                window.location.href = "/tbl_supervisor";
            }, 1100);
        });
    }

    return (
        <div className="main">
            <Menu></Menu>
            <div className="contenido-crear-usuario">
                <h1 id="titulo-crear-update">Crear Supervisor</h1>
                <form onSubmit={handleSubmit} className="form-new-update-user">
                    <input
                        type="text"
                        name="i_idsupervisor"
                        placeholder="Ingrese el id"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                    <br />
                    <input
                        type="text"
                        name="s_rutsupervisor"
                        placeholder="Ingrese el rut"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                    <br />
                    <input
                        type="text"
                        name="s_nombresupervisor"
                        placeholder="Ingrese el nombre"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                    <br />
                    <input
                        type="text"
                        name="i_pinsupervisor"
                        placeholder="Ingrese el pin"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                    <br />
                    <label>Activo: </label>
                    <select
                    name="i_activo"
                    onChange={handleChange}
                    className="input-new-update-user"
                    >
                    <option value="default">Selecione Estado</option>
                    <option value={1}>1</option>
                    <option value={0}>0</option>
                    </select>
                    <br />
                    <label>Admin: </label>
                    <select
                    name="i_admin"
                    onChange={handleChange}
                    className="input-new-update-user"
                    >
                    <option value="default">Seleccione permiso</option>
                    <option value={1}>1</option>
                    <option value={0}>0</option>
                    </select>
                    <br />
                    <button type="submit" className="boton-crear-update">Crear</button>
                </form>
            </div>
        </div>
    );
};                                                                  

export default Crear_supervisor;